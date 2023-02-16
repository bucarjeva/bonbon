const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

/** 
 * Swagger and OpenAPI
 */
const swaggerDoc = swaggerJsDoc({
    definition: {
        openapi: "3.0.3",
        info: {
            title: "Bonbon API",
            version: "1.0.0",
            description: "API for the Bonbon app",
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ],
        components: {
            schemas: {
                APIError: {
                    type: "object",
                    properties: {
                        message: {
                            type: "string"
                        },
                    }
                }
            }
        }
    },
    apis: [
        "./api/controllers/*.js",
        "./api/models/*.js"
    ]
});

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
app.use("/api", apiRouter);

// swagger.json
apiRouter.get("/swagger.json", (req, res) => {
    res.status(200).json(swaggerDoc); 
});

// docs
apiRouter.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

/**
 * Start server
 */
app.listen(port, () => {
    console.log(`Server is listening on port ${port}, running in ${
        process.env.NODE_ENV} mode`);
});
