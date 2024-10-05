//prisma client import 
import { PrismaClient } from '@prisma/client';

//create prisma client instance
const prisma = new PrismaClient();

async function getUser(email:string){
    const user=await prisma.user.findFirst({
        where:{
            email
        },
        select:{
            id:true,
            firstName:true,
            lastName:true,
            email:true
        }
    })
    return user;
}

const user=getUser("devansh@mail.com");
user.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})