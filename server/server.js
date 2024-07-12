const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const app = require('./app');
const port = 3001;
const host = '127.0.0.1';
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://adminteam:58ashates88$8@cluster0.ksxahua.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to the database');
    } catch (err) {
        console.log('Error connecting to the database');
    }

}

connect();

const server = app.listen(port, host, () => {
    console.log(`Node server is listening to ${server.address().port}`)
})