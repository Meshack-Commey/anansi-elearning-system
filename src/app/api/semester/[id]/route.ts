import connectMongoDB from '@/helpers/mongodb'
import Semester from '@/models/semesterModel'
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest, {params}:{params: {id: String}}) => {
    try{
        const { id } = params;
        await connectMongoDB();
        const semester = await Semester.findOne({_id: id});

        if(!semester){
            return NextResponse.json(
                {message: "semester not found"},
                {status: 404}
            )
        }

        return NextResponse.json({ semester }, {status: 200});

    } catch(error) {
        return NextResponse.json({message: "GET Error", error}, { status: 500})
    }
}

export const PUT = async (request: NextRequest, {params}:{params: {id: String}}) => {
    try{
        const { id } = params;

        const body = await request.json();
        const editSemester = {
            "title": body.title,
            "value": body.value,
        }

        await connectMongoDB();
        const updateSemester = await Semester.findByIdAndUpdate(id, editSemester, {status: 200});

        if(!updateSemester){
            return NextResponse.json(
                {message: "Semester not found"},
                {status: 404}
            )
        }

        return NextResponse.json({message: "Semester Updated"}, { status: 200})

    } catch(error) {
        return NextResponse.json({message: "Update Error", error}, { status: 500 })
    }
}

export const DELETE = async (request: NextRequest, {params}:{params: {id: String}}) => {
    try{
        
        const { id } = params;

        await connectMongoDB();
        await Semester.findByIdAndDelete(id);

        return NextResponse.json({message: "Semester has been deleted"}, {status: 200});

    } catch(error) {
        return NextResponse.json({message: "DELETE Error", error}, { status: 500})
    }
}