import { PrismaClient } from "@prisma/client";
//Creating an instance of the prisma
const prisma=new PrismaClient();
import bcrypt from "bcrypt"
export async function POST(req){
    const body=await req.json()
    const hashedPassword=await bcrypt.hash(body.password,10)
  const updatedUser=await prisma.user.update({
    where:{
        email:body.email
    },
    data:{
        password:hashedPassword
    }
  })
  console.log(updatedUser)
    return Response.json({
            success:true,
            message:"password updated successfuly",
            user:{
              id:updatedUser.id,
              name:updatedUser.name,
              email:updatedUser.email
            }
            
        })
}