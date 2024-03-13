import mongoose, { Schema } from "mongoose";

const questionSchema = new Schema(
    {
        name: String,
        course: String,
        filepath: Blob,
        author: String,
    }, 
    {
        timestamps: true,
    })

const Questions = mongoose.models.Questions || mongoose.model("Questions", questionSchema);

export default Questions;