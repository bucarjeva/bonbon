const express = require('express');
/** 
 * Swagger and OpenAPI
 */

/**
 * Database connection
 */
require("./api/models/dbConn.js");

/**
 * Create server
 */
const port = process.env.PORT || 3000;
const app = express();

/** 
 * Configure server
 */
const apiRouter = require("./api/routes/router.js");

/**
 * Start server
 */
if(process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}, running in ${
            process.env.NODE_ENV || "development"} mode`);
    });
} else {
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}, running in ${
            process.env.NODE_ENV || "development"} mode`);
    });
}