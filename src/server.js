/**
 * Main module.
 */

const { config } = require('./config');
const app = require('./express');
const connect = require('./mongoose');
const logger = require('logger');

connect().catch((err) => {
   logger.error(`database connection error: ${err.message}`);
});

app.listen(config.port, (err) => {
    if (err) {
        logger.error(err.message);
    }
    logger.info(`listening on port ${config.port}`);
});