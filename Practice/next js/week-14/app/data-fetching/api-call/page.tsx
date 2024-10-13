/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "@prisma/client";
import axios from "axios";

const client= new PrismaClient();




//next allows async components now but only in server components 
export default async function Home() {
    async function getUserDetails() {
        await new Promise((r)=>setTimeout(r,5000));
        const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
          return response.data;
      }

    async function betterGetUserDetails(){
      try {
        const user=await client.user.findFirst({});
        return {
          email:user?.username,
          name: user?.password
        }
      } catch (error) {
        return{
          error: (error as Error).message
        }
      }
      
    }
  // const userData = await getUserDetails();
  const userData = await betterGetUserDetails();

  return (
    <div>
      {userData.email}
      {userData.name}
      {userData.error && <div>{userData.error}</div>}
    </div>
  );
}
