import mongoose, { Schema } from "mongoose";

const levelSchema = new Schema(
    {
        title: String,
        value: Number,
    }, 
    {
        timestamps: true,
    })

const Level = mongoose.models.Level || mongoose.model("Level", levelSchema);

export default Level;