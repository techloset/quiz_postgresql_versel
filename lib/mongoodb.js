import mongoose, { connect } from "mongoose";

const connectMongodb = async ()=>{
    try {
         await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log("error connected to bd", error);
    }
}

export default connectMongodb