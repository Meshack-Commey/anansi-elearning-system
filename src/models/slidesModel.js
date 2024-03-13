import mongoose, { Schema } from "mongoose";

const slideSchema = new Schema(
    {
        name: String,
        course: String,
        filepath: Blob,
        author: String,
    }, 
    {
        timestamps: true,
    })

const Slides = mongoose.models.Slides || mongoose.model("Slides", slideSchema);

export default Slides;