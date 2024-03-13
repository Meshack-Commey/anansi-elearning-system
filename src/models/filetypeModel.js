import mongoose, { Schema } from "mongoose";

const typeSchema = new Schema(
    {
        filetype: String,
    }, 
    {
        timestamps: true,
    })

const FileType = mongoose.models.FileType || mongoose.model("FileType", typeSchema);

export default FileType;