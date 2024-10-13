"use server"

import prisma from "@/db"

/**
 * Why we need server actions
 * Because calling our own server via api calls using axios is not a good approach
 * also the second way we discussed of directly implementing logic there is not ok if the logic is used at multiple places
 * so we need something like rpc and grpc so that our client and backend can easily communicate and in as simple manner as a function call
 *  so we can use server actions to call our backend functions from our frontend
 * 
 * if you inspect and go to networks you will see a http request does go under the hood but also no response comes which happened in axios requests
 * why?? because backend just takes http request and sends the response via inbuilt pipelines to the component renders it and sends final html file.

 */

export async function SignupServerAcrion(username:string, password:string){
    try {
        console.log("inside server actions")
        await prisma.user.create({
            data: {
                username: username,
                password: password
            }
        })
        return {
            message: "Signed up"
        }
    } catch (error) {
        return {
            error: (error as Error).message
        }
    }
    
}