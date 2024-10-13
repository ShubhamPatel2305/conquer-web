import { NextRequest } from "next/server";

export function GET(){
    return Response.json({
        email:"shubham@ail.com",
        name:"shubham"
    })
}

export async function POST(req:NextRequest){
    const input= await req.json();
    console.log(input.username);
    return Response.json({
        uname:input.username,
        pass:input.password
    });
}

/*
app.get("/api/user",(req,res)=>{
res.json({...});
})
*/