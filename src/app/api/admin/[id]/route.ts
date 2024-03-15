import connectMongoDB from '@/helpers/mongodb'
import Admin from '@/models/adminModel'
import {  NextResponse } from 'next/server';


export async function GET(request: Request, { params }:{params: {id: String}}) {
        try{ 
            const { id } = params;
            await connectMongoDB();
            const admin = await Admin.findOne({_id: id});

            // if the user's ID is not in DB
            if(!admin){
                return NextResponse.json(
                    {message: "Admin not found"},
                    {status: 404}
                )
            }

            return NextResponse.json({ admin }, {status: 200});

        } catch(error) {
            return NextResponse.json({message: "GET Error", error}, { status: 500})
        }
}


export async function PATCH(request: Request, { params }: {params: {id: String}}) {
    try{ 
        const { id } = params;
        const body = await request.json();
        const editAdmin = {
            "roles": body.newRoles,
            "username": body.newUsername,
            "firstname": body.newFirstname,
            "lastname": body.newLastname,
            "othername": body.newOthername,
            "email": body.newEmail,
            "contact": body.newContact,
            "password": body.newPassword,
        }

        await connectMongoDB();
        const updateAdmin = await Admin.findByIdAndUpdate(id, editAdmin, {status: 200});

        if(!updateAdmin){
            return NextResponse.json(
                {message: "Admin not found"},
                {status: 404}
            )
        }

        return NextResponse.json({message: "Admin Updated"}, { status: 200})

    } catch(error) {
        return NextResponse.json({message: "Update Error", error}, { status: 500 })
    }

}

export async function DELETE(request: Request, {params}: {params: {id: string}}) {
    try{

        const { id } = params;

        await connectMongoDB();
        await Admin.findByIdAndDelete(id);

        return NextResponse.json({message: "Admin has been deleted"}, {status: 200});

    } catch(error) {
        return NextResponse.json({message: "DELETE Error", error}, { status: 500})
    }
}