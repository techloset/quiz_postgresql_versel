
import connectMongodb from "@/lib/mongoodb"
import Questions from "@/models/questions";
import { NextResponse } from "next/server";

export async function POST(req){
    const {question, option1, option2, option3, correctOption} =await req.json()
    await connectMongodb();
    await Questions.create({question, option1, option2, option3, correctOption})
    return NextResponse.json({message:"Question Added"})
}

export async function GET(){
  await connectMongodb();
  const questions = await Questions.find()
    return NextResponse.json(questions)
 }


 export async function DELETE(req){
  const id = req.nextUrl.searchParams.get('id')
  await connectMongodb()
  await Questions.findByIdAndDelete(id)
  return NextResponse.json({message:"Question Deleted"}, {status:200})
 }



 