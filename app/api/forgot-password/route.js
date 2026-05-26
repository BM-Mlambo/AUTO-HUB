import { PrismaClient } from "@prisma/client";
//Creating an instance of the prisma
const prisma=new PrismaClient();
export async function POST(req){
    const body=await req.json()
    const user=await prisma.user.findUnique({
        where:{
            email:body.email
        }
    })
    if (!user){
        return Response.json({
            success:false,
            message:"email does not exist"

        })
    }
    return Response.json({
            success:true,
            message:"email found"
            
        })
}