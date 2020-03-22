const express = require('express');
const mongoose = require('mongoose');
if(process.env.NODE_ENV != 'production') {const dotenv = require('dotenv/config')};
const routes = require('./src/routes');

//setup our port
let PORT = process.env.PORT;

//setup our app
let app = express();

//define the middle ware stuff
app.use(express.urlencoded( { extended: true}) );
app.use(express.json());

//use the routes
app.use(routes);

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})

app.listen(PORT, () => {
    console.log(`Web Running ==> Listening on Port: ${PORT}`);
})
