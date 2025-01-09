import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/A.Login';
import Homepage from './Components/B.Homepage';
import SignUp from './Components/D.signUp';
import '../src/styles.css';


const App = () => {

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/homepage" element={<Homepage />} />
                    <Route path="/" element={<Login />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;

/*

-- import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; -- 

Imports BrowserRouter from react-router-dom: Sets up a router that uses the HTML5 history API (pushState, replaceState, and the popstate event) to keep your UI in sync with the URL.

Imports Routes from react-router-dom: Provides a container for all Route components, rendering the one that matches the current location.

Imports Route from react-router-dom: Specifies a component to render based on the URL path. Used inside a Routes component.

Prepares for setting up routing in a React application: This setup allows you to define multiple routes and the components that should be rendered for each route.

-- Simplified explanation --

Imagine your website is like a big picture book with lots of pages. Using react-router-dom is like having a magical bookmark that helps you quickly jump to different pages in the book without flipping through every single page.

Bookmark Setup (BrowserRouter): This is like opening the book and saying, "I'm ready to use my magical bookmark to find pages easily."

Route Container (Routes): This is like having a special holder for all your bookmarks, so you can organize them.

Specific Bookmarks (Route): These are the individual bookmarks that tell you, "If you want to see the page about cats, go here," or "If you want to see the page about dogs, go there."

Using these bookmarks makes it super easy to jump to any page you want, without having to search through the whole book every time!


-- Using react-router-dom for routing in a React application offers several advantages over regular React formatting: --

Declarative Routing: Allows you to define routes declaratively, making the code easier to read and maintain.

Dynamic Routing: Enables the creation of dynamic routes that can change based on the app's state and props.

Nested Routes: Supports nested routes, allowing for complex navigation structures within the application.

URL Synchronization: Keeps the UI in sync with the URL, providing a better user experience with browser navigation (back and forward buttons).

Code Splitting: Facilitates code splitting by loading only the components necessary for the current route, improving app performance.

/*

There are a few additional props you can use with the <Route> tag:

index: Used to specify an index route.
exact: Ensures that the route only matches if the path is exactly the same (though this is more common in older versions of react-router).
element: The component to render when the path matches.
children: Nested routes or elements.

*/

/*

Single Import: 
Importing a single default export: import React from 'react';

Multiple Imports from the Same Module
Importing multiple named exports: import { useState, useEffect } from 'react';

Renaming Imports
Importing and renaming: import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

Importing Everything
Importing all exports as an object: import * as ReactDOM from 'react-dom';

Default and Named Imports Together
Importing both default and named exports: import React, { useState, useEffect } from 'react';

Example with Multiple Modules
Importing from multiple modules:
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';

*/