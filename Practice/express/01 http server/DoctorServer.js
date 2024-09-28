const express=require('express');
const bodyParser=require('body-parser');

const app=express();
const port=3000;

app.use(bodyParser.json());

const users=[
    {
        name:"Shubham",
        kidneys:[{
            healthy:false
        }]
    }
];

function kidneyCount(){
    const shubham=users[0].kidneys;
    const total=shubham.length;
    let healthy=0;
    for(let i=0;i<total;i++){
        if(shubham[i].healthy){
            healthy++;
        }
    }
    unhealthy=total-healthy;
    return {total,healthy,unhealthy};
}

//get route returns number of total healthy and unhealthy kidneys
app.get("/",(req,res)=>{
    res.json(kidneyCount());
});


//for post request add a kidney whose health is given in req body
app.post("/",(req,res)=>{
    const choice=req.body.isHealthy;
    const shubham=users[0].kidneys;
    shubham.push({
        healthy:choice
    });

    res.json(kidneyCount());
    
});


//a put request will update a specified kidney in query params and make it healthy if its unhealthy and opp
app.put("/", (req,res)=>{
    const idx=req.query.a;
    const shubham=users[0].kidneys;
    if(idx>0 && idx<=shubham.length){
        shubham[idx-1].healthy=!shubham[idx-1].healthy;
        res.json(kidneyCount());
    }else{
        res.send(`You dont have ${idx} number of kidneys `);
    }
});

//remove unhealthy kidneys
app.delete("/",(req,res)=>{
    let shubham=users[0].kidneys;
    //use filter to filter out good kidneys
    const healthy=shubham.filter((data)=>{
        if(data.healthy){
            return data;
        }
    });
    users[0].kidneys=healthy;
    res.json(kidneyCount());
});

app.listen(port,()=>{
    console.log("listening to port 3000");
});
