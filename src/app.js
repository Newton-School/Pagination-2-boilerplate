const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { off } = require('../models/user.js');
var users   =require("../models/user.js");

//connect to DB
const url = process.env.DATABASE_URL || "mongodb://localhost/users";
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})


// Import routes

//Router Middlewares
app.use(express.json());


//default value for limit is 5 and offset is 0
//This route should return an array of _id of all the element that need to be returned.
//output id can be in any order.

app.get("/",async function(req,res){

    var ids = [];

    //Write your code here
    //modify the ids array

    res.send(ids);

});

module.exports = app;


