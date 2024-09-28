//jwtbase.js continue
const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose=require('mongoose');
var sha256 = require('js-sha256');
const z=require('zod');

const app = express();
const secret= 'Shubham@123';

app.use(express.json());

mongoose.connect('mongodb+srv://admin:admin@cluster0.6c3q0.mongodb.net/user_app');
const user= mongoose.model('users',{
    uname: String,
    pass: String,
    name: String,
    hash: String
});

function inputValidation(req,res,next){
    const schema=z.object({
        uname:z.string().min(4),
        pass:z.string().min(8),
        name:z.string().min(4),
        hash:z.string()
    });
    const result=schema.safeParse({
        uname:req.body.uname,
        pass:req.body.pass,
        name:req.body.name,
        hash:sha256(req.body.uname)
    });
    if(result.success){
        next();
    }
    else{
        res.status(400).send({msg:"Invalid input"});
    }
}

async function userExistSignUpMiddleware(req,res,next){
    const data= await user.findOne({
        hash:sha256(req.body.uname)
    });
    if(data){
        res.status(400).send({msg:"User already exists"});
    }else{
        next();
    }
}

async function signinUserExistMiddleware(req,res,next){
    const data= await user.findOne({
        uname:req.body.uname,
        pass:req.body.pass
    });
    if(data){
        next();
    }
    else{
        res.status(400).send({msg:"User does not exist"});
    }
}

app.post("/signup",inputValidation,userExistSignUpMiddleware,(req,res)=>{
    const newUser=new user({
        uname:req.body.uname,
        pass:req.body.pass,
        name:req.body.name,
        hash:sha256(req.body.uname)
    });
    newUser.save().then(()=>{
        res.status(200).send({msg:"User created"});
    })
})

app.post("/signin",inputValidation, signinUserExistMiddleware, (req,res)=>{
    const token=jwt.sign({uname:sha256(req.body.uname)},secret);
    res.status(200).send({token:token});
})

app.get("/users",(req,res)=>{
    const token=req.headers['authorization'];
    if(token){
        jwt.verify(token,secret,async (err,data)=>{
            if(err){
                res.status(401).send({msg:"Invalid token"});
            }else{
                //send all users except asker
                const hashedUname=data.uname;
                try{
                    const list=await user.find({ hash : {$ne:hashedUname} }, 'name' );

                    // the above will return an array of objs having name and an id i.e unique id of each entry 
                    //eg: [{"_id":"66f7c63a79218d6cd65b04fd" , "name":"Shubham Patel pote"},{}...]
                    //but if you dont need the id in your response use below code:
                    const withoutIdlist=await user.find({hash:{$ne:hashedUname}}).select({ name:1 , _id:0 });

                    // res.status(200).send(list);
                    res.status(200).send(withoutIdlist);
                }catch(err){
                    res.status(500).send({ msg: "Error fetching users" });
                }
            }
        })
    }else{
        res.status(401).send({msg:"Token required go to /signin"});
    }
})


app.listen(3000,()=>{
    console.log('Server started at port 3000');
})