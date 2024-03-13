import connectMongoDB from '@/helpers/mongodb'
import User from '@/models/userModel'
import { NextResponse } from 'next/server';

export const GET = async (request, {params}) => {
    try{
        const { id } = params;
        await connectMongoDB();
        const user = await User.findOne({_id: id});

        if(!user){
            return NextResponse.json(
                {message: "User not found", error},
                {status: 404}
            )
        }

        return NextResponse.json({ user }, {status: 200});

    } catch(error) {
        return NextResponse.json({message: "GET Error", error}, { status: 500})
    }
}

export const PATCH = async (request, {params}) => {
    try{
        const { id } = params;

        const body = await request.json();
        const editUser = {
            "roles": body.newRoles,
            "username": body.newUsername,
            "firstname": body.newFirstname,
            "lastname": body.newLastname,
            "othername": body.newOthername,
            "programme": body.newProgramme,
            "level": body.newLevel,
            "semester": body.newemester,
            "email": body.newEmail,
            "contact": body.newContact,
            "password": body.newPassword,
        }

        await connectMongoDB();
        const updateUser = await User.findByIdAndUpdate(id, editUser, {status: 200});

        if(!updateUser){
            return NextResponse.json(
                {message: "User not found", error},
                {status: 404}
            )
        }

        return NextResponse.json({message: "User Updated"}, { status: 200})

    } catch(error) {
        return NextResponse.json({message: "Update Error", error}, { status: 500 })
    }
}

export const DELETE = async (request, {params}) => {
    try{
        const { id } = params;

        await connectMongoDB();
        await User.findByIdAndDelete(id);

        return NextResponse.json({message: "User has been deleted"}, {status: 200});

    } catch(error) {
        return NextResponse.json({message: "DELETE Error", error}, { status: 500})
    }
}