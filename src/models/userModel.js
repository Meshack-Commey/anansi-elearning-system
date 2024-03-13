import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        roles: String,
        username: String,
        firstname: String,
        lastname: String,
        othername: String,
        programme: String,
        level: Number,
        semester: Number,
        email: String,
        contact: String,
        password: String,
    }, 
    {
        timestamps: true,
    })

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;