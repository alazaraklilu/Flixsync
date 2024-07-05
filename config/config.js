require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'database_test',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'database_production',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
  },
};

/*
 The config.js file stores the root owner's 
 database credentials (or other necessary credentials) 
 for different environments, ensuring the application can 
 connect to the correct database using those credentials.
*/

/*
Environment Variables: These are variables that are set outside of your application code, 
often through a configuration file or the operating system's environment settings. 
They provide a way to manage configuration settings and sensitive 
information like database credentials without hardcoding them into your source code.
*/

/*
process.env Object: In Node.js, the process.env object 
is a global object that provides access to the environment variables. 
By using process.env.VARIABLE_NAME, 
you can retrieve the value of an environment variable.
*/