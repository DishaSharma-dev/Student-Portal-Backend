const express = require('express');
const cors = require('cors');
const database = require('./config/config')
require('dotenv').config()
const routes = require('./routes/routes');

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use('/api', routes);

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
});
