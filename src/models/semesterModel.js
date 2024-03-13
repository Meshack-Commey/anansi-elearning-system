import mongoose, { Schema } from "mongoose";

const semesterSchema = new Schema(
    {
        title: String,
        value: Number,
    }, 
    {
        timestamps: true,
    })

const Semester = mongoose.models.Semester || mongoose.model("Semester", semesterSchema);

export default Semester;