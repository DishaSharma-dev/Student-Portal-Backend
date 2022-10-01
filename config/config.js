require('dotenv').config();

const mongoose = require('mongoose');

const connectionString = process.env.DATABASE_URL;

mongoose.connect(connectionString);

const database = mongoose.connection;

module.exports = database;