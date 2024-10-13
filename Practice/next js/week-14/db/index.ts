
import { PrismaClient } from '@prisma/client'


//ref: https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices
console.log("trying to generate new client")
const prismaClientSingleton = () => {
    console.log("new client instantiated")
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

//global this is a global object that is available in the global scope of the application
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma