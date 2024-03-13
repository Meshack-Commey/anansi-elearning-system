import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema(
    {
        title: String,
        subtitle: String,
        code: String,
        programme: String,
        level: Number,
        semester: Number,
        description: String,
    }, 
    {
        timestamps: true,
    })

const Courses = mongoose.models.Courses || mongoose.model("Courses", courseSchema);

export default Courses;