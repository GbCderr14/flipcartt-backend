const express = require('express');
const dotenv = require('dotenv');
const Connection = require('./databse/db');
const app = express();
dotenv.config({ path: "./config.env" });
const cors = require('cors');

const router = require('./routes/route');
const PORT = process.env.PORT;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);
app.use(express.json());
app.use(cors());
app.use('/', router);
app.listen(PORT, () => {
    console.log("Server is running on 8000");
});



