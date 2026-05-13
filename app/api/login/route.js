import { PrismaClient } from "@prisma/client";
//Creating an instance of the prisma
const prisma=new PrismaClient();
//Bcrypt used to hash password we never store them as plain text
import bcrypt from "bcrypt"
export async function POST(req){
    try{
        const body=await req.json()
        const{email, password}=body
        //Checks if the user exist in the data base
        const existingUser=await prisma.user.findUnique({
            where:{email}
        })
        //if the user does not exist 
        if(!existingUser){
            return Response.json(
                {message:"User not found"},
                {status:404}//404=not found
            )

        }
        //compare the entered password with the hashed password in the db
        const isPasswordcorrect=await bcrypt.compare(
            password,
            existingUser.password
        )
        //if password is wrong 
        if(!isPasswordcorrect){
            return Response.json(
                {message:"invalid credentials"},
                {status:401}//401=unauthorized
            )
        }
        //Login succcessfull
        return Response.json(
        {
            message:"login successfull",
            user:existingUser
        },
        {status:200}
        )
    }
     catch(error){
        console.log(error)
        //if anything goes wrong(db down,unexpected error)log it and return 500
        return Response.json(
            {message:"something went wrong"},
            {status:500} //500=internal server error
        )
        
    }
}
    
