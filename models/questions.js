import mongoose, { Schema, } from "mongoose";

const questionSchema = new Schema({
    
        question: String,
        option1: String,
        option2: String,
        option3: String,
        email:String,
        correctOption:  String,
    
},{
    timestamps: true
})

const Questions = mongoose.models.Questions || mongoose.model('Questions', questionSchema)
export default Questions