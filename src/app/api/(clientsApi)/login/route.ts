//import { connectDB } from "@/dbConfig/dbconfig"
import { users } from "../user/data"
import { NextResponse } from "next/server";
//import bcrypt from 'bcrypt'

export async function POST(req: Request){
    try {
        //get the database connection string
        //await connectDB();
        //get email, phone, password from the request body
        const {email, password} = await req.json();
        //check whether the user already exist in the database
        const exist = users.find(user => user.email === email && user.password === password);
        if(exist) {
            return NextResponse.json({message: "Log in successful"}, {status: 500})
        }
        
    } catch(error) {
        console.log("Error while registering User", error);
        return NextResponse.json({message: "Error occurred while registering the user"}, {status: 500});
    }
}   