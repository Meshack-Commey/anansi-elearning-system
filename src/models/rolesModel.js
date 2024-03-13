import mongoose, { Schema } from "mongoose";

const roleSchema = new Schema(
    {
        role: String,
    }, 
    {
        timestamps: true,
    })

const Roles = mongoose.models.Roles || mongoose.model("Roles", roleSchema);

export default Roles;