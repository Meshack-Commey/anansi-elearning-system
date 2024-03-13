import connectMongoDB from '@/helpers/mongodb'
import Programme from '@/models/programmeModel'
import { NextResponse } from 'next/server';

export const GET = async (request, {params}) => {
    try{
        const { id } = params;
        await connectMongoDB();
        const programme = await Programme.findOne({_id: id});

        if(!programme){
            return NextResponse.json(
                {message: "Programme not found", error},
                {status: 404}
            )
        }

        return NextResponse.json({ programme }, {status: 200});

    } catch(error) {
        return NextResponse.json({message: "GET Error", error}, { status: 500})
    }
}

export const PATCH = async (request, {params}) => {
    try{
        const { id } = params;

        const body = await request.json();
        const editProgramme = {
            "title": body.newTitle,
            "slogan": body.newSlogan,
            "department": body.newDepartment,
            "level": body.newLevel,
            "description": body.newDescription,
        }

        await connectMongoDB();
        const updateProgramme = await Programme.findByIdAndUpdate(id, editProgramme, {status: 200});

        if(!updateProgramme){
            return NextResponse.json(
                {message: "Programme not found", error},
                {status: 404}
            )
        }

        return NextResponse.json({message: "Programme Updated"}, { status: 200})

    } catch(error) {
        return NextResponse.json({message: "Update Error", error}, { status: 500 })
    }
}

export const DELETE = async (request, {params}) => {
    try{
        
        const { id } = params;

        await connectMongoDB();
        await Programme.findByIdAndDelete(id);

        return NextResponse.json({message: "Programme has been deleted"}, {status: 200});

    } catch(error) {
        return NextResponse.json({message: "DELETE Error", error}, { status: 500})
    }
}