const express = require('express');
const app = express();
const port = 3000;
app.use(express.json()); // this is a middleware only(express.json()) but we only use app.use for those middlewares which we want to be used by all the routes in our server else we add manually

//leys say we need a rate limiter middleware o avoid DDOS attack
let count=0;
function rateLimiter(req,res,next){
    count++;
    if(count>5){
        res.status(429).json({msg:"Too many requests"});
    }else{
        next();
    }
}

app.use(rateLimiter);


//now authentication and other middlewares which are not always needed in all routes

function authentication(req,res,next){
    const uname=req.headers.uname;
    const pass=req.headers.pass;
    if(uname!="admin" || pass!="admin"){
        res.status(401).json({msg:"Please enter valid credentials"});
    }
    next();
}

function inputValidation(req,res,next){
    const id=req.query.id;
    if(id!=0 && id!=1){
        res.status(400).json({msg:"Please enter valid id"});
    }
    next();
}

app.get("/health-checkup", authentication, inputValidation, (req,res)=>{
    res.status(200).json({msg:"Your kidney are all set"});
});

app.get("/test", authentication,(req,res)=>{
    res.status(200).json({msg:"This is a test route"});
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});