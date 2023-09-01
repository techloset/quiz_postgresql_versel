import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req, {params}){
  
    const {id} = params;
    const {newQuestion:question, newOption1: option1, newOption2: option2, newOption3:option3, newCorrectOption: correctOption } = await req.json()
    await  prisma.question.update({
      where: {
         id: parseInt(id), 
       },
       data: {
         question,
         option1,
         option2,
         option3,
         correctOption
       }

    })
    return NextResponse.json({message:"Question Updated"}, {status: 200})
 }
  
 export async function GET(req, {params}){
    const {id} = params;
    const questions = await prisma.question.findUnique({
      where:{
         id : parseInt(id)
      }
    })
    return NextResponse.json({questions}, {status: 200})
 }