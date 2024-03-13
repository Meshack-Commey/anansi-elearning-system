import mongoose, { Schema } from "mongoose";

const programmeSchema = new Schema(
    {
        title: String,
        slogan: String,
        department: String,
        level: String, // educational level e.g. Bachelors or Masters
        description: String,
    }, 
    {
        timestamps: true,
    })

const Programme = mongoose.models.Programme || mongoose.model("Programme", programmeSchema);

export default Programme;