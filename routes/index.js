//My code functionality notes:
//The index.js file in the same folder as the /api directory in an Express.js project 
//serves as the main entry point for the application server. 
//Its main functionality is to define the top-level routes for the server and 
//delegate all API-related routing logic to the /api directory.

//This index.js file in the main project directory sets up the top-level routes 
//for the application server and delegates all API-related routing logic to the /api directory. 
//This helps to keep the code organized and modular, and makes it easier to manage the routing logic for a larger application.

//When a directory is required or imported into another module, if the directory contains an index.js file, 
//then the index.js file will be automatically loaded as the default entry point for that directory.
//e.g. const api = require('./api');
//However, if a different entry point file is specified in the require() function, then that file will be used instead of the index.js file.

const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;