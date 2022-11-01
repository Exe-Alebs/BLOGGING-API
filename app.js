const express = require('express');   //require express library
const passport = require('passport');   // require passport for authentication
const bodyParser = require('body-parser');

require('./db').connectToMongoDB() //mongoDB connection
require('dotenv').config

const PORT =process.env.PORT ;
const app =express();


app.use(bodyParser.urlencoded({extended: false}));

//BLOG HOMEPAGE
app.get('./', (req, res) => {
    res.send("Welcome to Alebs Blog API");
});

//ERROR HANDLER
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500);
    res.json({error: EvalError.message});
});


app.listen(PORT, () => {
    console.log('Server is running at port ${PORT}')
});
