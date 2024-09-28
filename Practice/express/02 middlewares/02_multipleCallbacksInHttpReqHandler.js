const express = require('express');

const app = express();
const port = 3000;


// next is a function that passes controls to next middleware 

app.get("/", (req,res,next)=>{
    console.log("First middleware");
    next();
},(req,res,next)=>{
    console.log("Second middleware");
    next();
}, (req,res)=>{
    console.log("Third middleware");
    next();//will make no change and res will still be sent as no middlewares to load ahead so goes to next line
    res.send("Hello world");
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});