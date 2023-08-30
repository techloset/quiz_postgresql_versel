// import connectMongodb from "@/lib/mongoodb"
// import User from "@/models/user";
// import { NextResponse } from "next/server";

// export async function POST(req){
//     const {name, email} =  await req.json()
//     await connectMongodb();
//     await User.create({name, email});
//     return NextResponse.json({message:"User Registered"},{status: 201})
// }

// export async function GET(){
//     await connectMongodb();
//     const user = await User.find()
//       return NextResponse.json(user)
//    }
  