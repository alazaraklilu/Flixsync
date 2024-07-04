# Flixsync
Moviegoing with friends, made easy.


# 1. Identify your user(s)
Moviegoers; social groups of 2 or more 

# 2. What is the problem you’re solving?
Coordinating movie-watching experiences among friends can be challenging, as it requires finding a mutually convenient time, sending invites, and integrating the event into each person’s calendar.

# 3. What is the solution?
Flixsync simplifies this process by allowing users to invite friends to watch movies listed on the platform, schedule a convenient viewing time, and seamlessly integrate the event into their calendars, and even purchase tickets directly on the platform, making it a one-stop solution for theater-going and movie-watching experiences.

# 4. What is the MVP scope? (core features you must get working)
User authentication
    - Login page 
Content management
    - Available Showings page 
Single movie page
    - Invite - button
    - Buy Tickets - button 
Integration w/Google calendar for schedule management

# 5. What are the tough technical challenges involved with solving this problem?
Platform purchasing feature 
Google calendar integration 

    - Webpack: running build resulted in few error messages; needed to revisit dependencies and ensure everything was included in my json files

# 6. What are the stretch goals?
Upcoming releases page
Previously watched page 
Promotions page 



# Webpack Notes:

Entry: The starting point of the application (e.g., ./src/index.js).

Output: Specifies where to output the bundled files and their filenames (e.g., dist/bundle.js).

Loaders: Transformations applied to the source files (e.g., babel-loader for JavaScript, css-loader for CSS).

Plugins: Extend or customize Webpack's behavior (e.g., HtmlWebpackPlugin for HTML file generation, HotModuleReplacementPlugin for hot module replacement).

Mode: Specifies the build mode (development, production, or none), which affects optimizations and output.

Module: Contains the rules for how different file types should be processed (e.g., test for .js files, use babel-loader).

Resolve: Defines how Webpack resolves module requests (e.g., extensions like .js, .jsx). Simplifies module import paths and ensures Webpack can find and bundle modules correctly without manual configuration for each import.

DevServer: Configuration for Webpack's development server (e.g., hot for hot module replacement, port for the server port).

# HM Reloading vs. HM Replacement: 
Replacement specifically refers to swapping out the changed modules.
Reloading can refer to the overall process of updating code changes without a full page refresh, which includes HMR.

Database Setup steps: 

- Install and configure Sequelize to connect to your PostgreSQL database.
- Define models and run migrations to set up your database schema.
- Integrate Sequelize into your existing Express server.
- Create routes to handle database operations and use them in your Express app.
