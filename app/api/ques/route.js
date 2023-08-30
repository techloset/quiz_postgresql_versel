
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req){
    const {question, option1, option2, option3, correctOption} =await req.json()
   let res =  await prisma.question.create({data: {
      question, option1, option2, option3, correctOption
    }})
    return NextResponse.json({message:"Question Added"})
}

export async function GET(){
  const questions = await prisma.question.findMany()
    return NextResponse.json(questions)
 }


 export async function DELETE(req){
  const id = req.nextUrl.searchParams.get('id')
  await  prisma.question.delete(
    {
      where:{
        id: parseInt(id)
      }
    }
  )
  return NextResponse.json({message:"Question Deleted"}, {status:200})
 }



 