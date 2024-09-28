const express = require('express');
const z = require('zod');

const app = express();
const port=3000;

app.use(express.json());

const schema=z.array(z.number());

//create a schema to check for the object:
// { email:string should be email , password: string ofminimum length 8 , country: shoule be "IN" or "US only" }
const user=z.object({
    email:z.string().email(),
    pass:z.string().min(8),
    country:z.string().trim().refine((data)=>data==="IN"||data==="US",{
        message:"Country should be IN or US"
    })
    // you can also do country: z.literal("IN").or(z.literal("US"))
})

app.get("/",(req,res)=>{
    const data=req.body.arr;
    const response=schema.safeParse(data);
    res.send({response});
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})