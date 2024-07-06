const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const { sequelize } = require('./src/Backend/C.models');
const userRoutes = require('./src/Backend/A.routes'); // Adjust the path as necessary
require('dotenv').config();

const app = express();
const compiler = webpack(config);

// Middleware for Webpack
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

// Middleware for Parsing JSON and URL-encoded Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Files
app.use(express.static(path.join(__dirname, 'dist')));

// API Routes
app.use('/api/users', userRoutes);

// Catch-all Route to Serve React App
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Sync Database and Start Server
const PORT = process.env.PORT || 4000;
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});