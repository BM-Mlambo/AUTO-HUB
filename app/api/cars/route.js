import { PrismaClient } from "@prisma/client";
//Creating an instance of the prisma
const prisma=new PrismaClient();
export async function GET(){
    const cars=await prisma.car.findMany()
    return Response.json(cars)
}