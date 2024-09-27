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

    //localhost:3000/test?n=10&a=50

    let a= Math.floor(req.query.n);  // math.floor automatically converts string to number
    let b=Math.floor(req.query.a);
    console.log(sum(a,b));
    res.send("hahaha");
});

function sum(a,b){
    return a+b;
}

app.listen(port,()=>{
    console.log("listening to port: ",port);
})
