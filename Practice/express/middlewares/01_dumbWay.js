const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyParser.json());

//now letssay you make another route and need authentication there too then will you write this again and again?
// DRY

app.get("/health-checkup",(req,res)=>{
    const id=req.query.id;
    const uname=req.headers.uname;
    const pass=req.headers.pass;

    //authentication and params check(inputs valication)
    if(uname==="admin" && pass==="admin"){
        if(id==="1" || id==="2"){
            res.status(200).json({msg:"Your Kidney is Fine"});
        }else{
            res.status(400).json({msg:"Please enter valid kidney id 1 or 2"});
        }
    }else{
        res.status(401).json({msg:"Please enter valid credentials"});
    }

});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});