const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
//here for testing purpose i have made set interval of 10 seconds
setInterval(() => {
    numberOfRequestsForUser = {};
}, 10000);

app.use((req,res,next)=>{
    const uid=req.headers["uid"];
    
    if(!uid){
        res.status(404).send("Not a valid uid");
    }

    if(!numberOfRequestsForUser[uid]){
        numberOfRequestsForUser[uid]=1;
    }
    else{
        numberOfRequestsForUser[uid]++;
    }

    if(numberOfRequestsForUser[uid]>5){
        res.status(404).send("Too many requests");
    }
    next();
})

app.get('/user', function(req, res) {
  res.status(200).json(numberOfRequestsForUser);
});

app.post('/user', function(req, res) {
  res.status(200).json(numberOfRequestsForUser);
});

app.listen(3000);