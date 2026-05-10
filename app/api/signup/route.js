import { PrismaClient } from "@prisma/client";
//Creating an instance of the prisma
const prisma=new PrismaClient();
//Bcrypt used to hash password we never store them as plain text
import bcrypt from "bcrypt"
export async function POST(req){
    try{
        //extract the JSON body from the incoming request
        const body=await req.json()
        //Pull out the 3 fields we expect from the sign up form.
        const{name,email,password}=body
        //Check if the user with this email already exist in the data base
        const existingUser=await prisma.user.findUnique({
            where:{email},
        })
        //if a user was found stop here and return an error
        if(existingUser){
            return Response.json(
                {message:"User already exists"},
                {status:400}//400=bad request
            )
        }
        //hash the password before saving
        const hashedPassword=await bcrypt.hash(password,10)
        //save the new user to the database
        const newUser=await prisma.user.create({
            data:{
                name,
                email,
                password:hashedPassword
            }
        })
        //return a success response with the new user's data
        return Response.json(
            {
                message:"user created successfully",
                user:newUser
            },
            {
                status:201 //201=created
            }
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