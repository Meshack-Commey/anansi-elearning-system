import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
    {
        category: String,
    }, 
    {
        timestamps: true,
    })

const FileCategory = mongoose.models.FileCategory || mongoose.model("FileCategory", categorySchema);

export default FileCategory;