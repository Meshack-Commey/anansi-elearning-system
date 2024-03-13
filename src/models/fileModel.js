import mongoose, { Schema } from "mongoose";

const fileSchema = new Schema(
    {
        name: String,
        type: String,
        category: String,
        author: String,
        uploadfile: String,
        uploadimage: String,
        description: String
    }, 
    {
        timestamps: true,
    })

const Files = mongoose.models.Files || mongoose.model("Files", fileSchema);

export default Files;