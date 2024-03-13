import connectMongoDB from '@/helpers/mongodb'
import Courses from '@/models/courseModel'
import {  NextResponse } from 'next/server';


export async function GET(request: Request, { params }:{params: {id: String}}) {
        try{ 
            const { id } = params;
            await connectMongoDB();
            const course = await Courses.findOne({_id: id});

            // if the course's ID is not in DB
            if(!course){
                return NextResponse.json(
                    {message: "Course not found"},
                    {status: 404}
                )
            }

            return NextResponse.json({ course }, {status: 200});

        } catch(error) {
            return NextResponse.json({message: "GET Error", error}, { status: 500})
        }
}


export async function PATCH(request: Request, { params }: {params: {id: String}}) {
    try{ 
        const { id } = params;
        const body = await request.json();
        const editCourse = {
            "title": body.newTitle,
            "subtitle": body.newSubtitle,
            "code": body.newCode,
            "programme": body.newProgramme,
            "level": body.newLevel,
            "semester": body.newSemester,
            "description": body.newDescription
        }
        await connectMongoDB();
        const updateCourse = await Courses.findByIdAndUpdate(id, editCourse, {status: 200});

        if(!updateCourse){
            return NextResponse.json(
                {message: "Course not found"},
                {status: 404}
            )
        }

        return NextResponse.json({message: "Course Updated"}, { status: 200})

    } catch(error) {
        return NextResponse.json({message: "Update Error", error}, { status: 500 })
    }

}

export async function DELETE(request: Request, {params}: {params: {id: string}}) {
    try{

        const { id } = params;

        await connectMongoDB();
        await Courses.findByIdAndDelete(id);

        return NextResponse.json({message: "Course has been deleted"}, {status: 200});

    } catch(error) {
        
        return NextResponse.json({message: "DELETE Error", error}, { status: 500})
    }
}