const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const secret= 'Shubham@123';
app.use(express.json());
var sha256 = require('js-sha256');

const ALL_USERS=[{
    uname:"shubham",
    pass:"test",
    name:"Shubham Patel",
    hash:"10f6d3ce9d854d1ebfc1ca7d1981fafc122a9970093382f2c5c72cfa6ab47572"
},
{
    uname:"shubham1",
    pass:"test",
    name:"Shubham Patel",
    hash:"ec3404f373b1d99b81d4f111565a96840d2dba6d13f81e1d639836e213ea58d9"
},
{
    uname:"shubham2",
    pass:"test",
    name:"Shubham Patel",
    hash:"bc9360b3915c5ef6508b69478c2b621acf24fec2c92f01ac78a4bbd61cb58447"
}
];

function userExists(u,p){
    for(let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].uname===u && ALL_USERS[i].pass===p){
            return true;
        }
    }
    return false;
}

app.post("/signin",(req,res)=>{
    const uname=req.body.uname.toLowerCase();
    const pass=req.body.pass;
    if(userExists(uname,pass)){
        const token=jwt.sign({uname:sha256(uname)},secret);
        res.status(200).send({token:token});

    }else{
        res.status(401).send({msg:"Invalid credentials"});
    }
})

app.get("/:id",function(req,res){
    dt=req.params.id;
    res.send(sha256(dt).toString());
})



app.listen(3000,()=>{
    console.log('Server started at port 3000');
})