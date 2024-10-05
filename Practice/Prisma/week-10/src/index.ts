import { Prisma, PrismaClient, User } from '@prisma/client'
import { Types } from '@prisma/client/runtime/library';

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB


type UserType = {
    id: number;
  };
  
  async function addUser(
    email: string,
    password: string,
    firstName?: string,
    lastName?: string
  ): Promise<UserType> {
    const newUser = await prisma.user.create({
      data: {
        email: email,
        firstName: firstName ?? null, // Ensure firstName and lastName are nullable
        lastName: lastName ?? null,
        password: password
      },
      select:{
        id:true
      }
    });
    return newUser;
  }

  //add a demmo user
    const newUser = addUser("sshubhamss@mail.com","test@1234","Shubham");
    newUser.then((res)=>{
        console.log(res.id);
    }).catch((err)=>{
        console.log(err);
    })
  
