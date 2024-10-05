import { PrismaClient, Todo } from "@prisma/client";

const prisma = new PrismaClient();

//add a todo to db

type TodoType={
    id:number;
}

async function addTodo(userId:number, title:string, description:string):Promise<TodoType> {
    const newTodo= await prisma.todo.create({
        data:{
            title,
            description,
            userId
        },
        select:{
            id:true
        }
    })
    return newTodo;
}

const newTodo=addTodo(1,"Learn Prisma","Learn Prisma with typescript");
newTodo.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})