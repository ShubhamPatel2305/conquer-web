const express= require('express');
const app=express();
const port=3000;
const bodyParser=require('body-parser');

app.use(bodyParser.json());
//express gives no functionality to read a request body so we have to use body parser as a middleware to achieve it.

app.get("/", (req,res)=>{

    let data=req.body;
    console.log(data);

    res.send("hello world");
});

app.get("/test",(req,res)=>{
    res.send("hahaha");
});

app.listen(port,()=>{
    console.log("listening to port: ",port);
})
