import connectMongoDB from '@/helpers/mongodb'
import Roles from '@/models/rolesModel'
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest, {params}:{params: {id: String}}) => {
    try{
        const { id } = params;
        await connectMongoDB();
        const roles = await Roles.findOne({_id: id});

        if(!roles){
            return NextResponse.json(
                {message: "User Role not found"},
                {status: 404}
            )
        }

        return NextResponse.json({ roles }, {status: 200});

    } catch(error) {
        return NextResponse.json({message: "GET Error", error}, { status: 500})
    }
}

export const PUT = async (request: NextRequest, {params}:{params: {id: String}}) => {
    try{
        const { id } = params;

        const body = await request.json();
        const editRole = {
            "role": body.role
        }

        await connectMongoDB();
        const updateRole = await Roles.findByIdAndUpdate(id, editRole, {status: 200});

        if(!updateRole){
            return NextResponse.json(
                {message: "User Role not found"},
                {status: 404}
            )
        }

        return NextResponse.json({message: "User Role Updated"}, { status: 200})

    } catch(error) {
        return NextResponse.json({message: "Update Error", error}, { status: 500 })
    }
}

export const DELETE = async (request: NextRequest, {params}:{params: {id: String}}) => {
    try{
        
        const { id } = params;

        await connectMongoDB();
        await Roles.findByIdAndDelete(id);

        return NextResponse.json({message: "User Role has been deleted"}, {status: 200});

    } catch(error) {
        return NextResponse.json({message: "DELETE Error", error}, { status: 500})
    }
}