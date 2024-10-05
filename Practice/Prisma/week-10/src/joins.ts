import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function getUserTodosWithUserDetails(userId:number) {
    //get users email and array of all his todos
    const user=await prisma.user.findUnique({
        where:{
            id:userId
        },
        select:{
            email:true,
            todos:{
                select:{
                    title:true,
                    description:true
                }
            }
        }
    })
    return user;
}

const userTodos=getUserTodosWithUserDetails(1);
userTodos.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})