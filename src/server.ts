import http from "http";
import express from "express";
import bodyParser from "body-parser";
import config from "./config/config";

/**
 * import Router
 */
import loginRoutes from "./routes/login";

const router = express();

/** Parse the request */
router.use(express.urlencoded({extended: true}));
router.use(express.json()) // To parse the incoming requests with JSON payloads

/**
 * Rules of API
 */
/** Rules of API */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "http://localhost:3007");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})


/**
 * Create server
 */
 const httpServer = http.createServer(router);
 httpServer.listen(config.server.port, () => console.log(`Server running on port ${config.server.port}`));
 

/**
 * Routes
 */
router.use('/login', loginRoutes);

/**
 * Error Handling
 */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});
