import connectMongodb from "@/lib/mongoodb";
import Questions from "@/models/questions";
import { NextResponse } from "next/server";

export async function PUT(req, {params}){
  
    const {id} = params;
    const {newQuestion:question, newOption1: option1, newOption2: option2, newOption3:option3, newCorrectOption: correctOption } = await req.json()
    await connectMongodb()
    await Questions.findByIdAndUpdate(id, {question, option1, option2, option3, correctOption})
    return NextResponse.json({message:"Question Updated"}, {status: 200})
 }
  
 export async function GET(req, {params}){
    const {id} = params;
    await connectMongodb();
    const questions = await Questions.findOne({_id: id})
    return NextResponse.json({questions}, {status: 200})
 }