import { NextRequest } from "next/server";
import prisma from "@/db";
export function GET(){
    return Response.json({
        email:"shubham@ail.com",
        name:"shubham"
    })
}


export async function POST(req: NextRequest) {
    const body = await req.json();
    // should add zod validation here
    const user = await prisma.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });

    console.log(user.id);

    return Response.json({ message: "Signed up" });
}

/*
app.get("/api/user",(req,res)=>{
res.json({...});
})
*/