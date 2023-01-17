require('dotenv').config
const MONGO_DB_CONNECTION_URL = process.env.NODE_ENV === 'test' ? process.env.TEST_MONGO_DB_CONNECTION_URL : process.env.MONGO_DB_CONNECTION_URL
const PORT = process.env.PORT
const JWT_SECRET = process.env.JWT_SECRET

module.exports = {
    MONGO_DB_CONNECTION_URL,
    PORT,
    JWT_SECRET,
}