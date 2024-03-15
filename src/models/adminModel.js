import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema(
    {
        roles: String,
        username: String,
        firstname: String,
        lastname: String,
        othername: String,
        email: String,
        contact: String,
        password: String,
    }, 
    {
        timestamps: true,
    })

const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);

export default Admin;