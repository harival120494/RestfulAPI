import dotenv from 'dotenv';
dotenv.config();

/**
 * VARIABLE SERVER_HOSTNAME, SERVER_PORT
 */
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1337;

/**
 * CONFIG VARIABLE FOR MYSQL CONNECT
 */
const MYSQL_HOST        = process.env.MYSQL_HOST || 'localhost';
const MYSQL_DATABASE    = process.env.MYSQL_DATABASE || 'db_ecommerce';
const MYSQL_USERNAME    = process.env.MYSQL_USERNAME || 'root';
const MYSQL_PASWORD     = process.env.MYSQL_PASWORD || '';

const MYSQL = {
    host : MYSQL_HOST,
    database : MYSQL_DATABASE,
    username : MYSQL_USERNAME,
    password : MYSQL_PASWORD
}

const SERVER = {
    hostname : SERVER_HOSTNAME,
    port : SERVER_PORT,
};

const config = {
    mysql : MYSQL,
    server : SERVER
};

export default config;