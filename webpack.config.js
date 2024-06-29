const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point for your application
    output: {
        filename: 'bundle.js', // Name of the output file
        path: path.resolve(__dirname, 'dist') // Output directory
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Apply this rule to all .js files
                exclude: /node_modules/, // Exclude the node_modules directory
                use: {
                    loader: 'babel-loader', // Use Babel to transpile JavaScript files
                    options: {
                        presets: ['@babel/preset-env'] // Presets for Babel
                    }
                }
            },
            {
                test: /\.css$/, // Apply this rule to all .css files
                use: ['style-loader', 'css-loader'] // Use these loaders for CSS files
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // Serve files from the dist directory
        compress: true, // Enable gzip compression
        port: 9000 // Serve on port 9000
    }
};