//import prisma client 
import { PrismaClient } from '@prisma/client';

//create prisma client instance
const prisma = new PrismaClient();

type UserType={
    id:number;
}

async function updateUser(id:number, email?:string, firstName?:string, lastName?:string):Promise<UserType>{
    const updatedUser= await prisma.user.update({
        where:{
            id:1
        },
        data:{
            email,
            firstName,
            lastName
        },
        select:{
            id:true
        }
    })
    return updatedUser;
}

const updatedUser=updateUser(1,"devansh@mail.com","devansh","patel");
updatedUser.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})