import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";



export async function POST(req){
    const {name, email} =await req.json()
     await prisma.user.create({data: {name ,email}})
    return NextResponse.json({message:"User Added"})
}


export async function GET(){
    const users = await prisma.user.findMany()
      return NextResponse.json(users)
   }
  
