import connectMongoDB from '@/helpers/mongodb'
import Questions from '@/models/questionsModel'
import {  NextResponse } from 'next/server';


export async function GET(request: Request, { params }:{params: {id: String}}) {
        try{ 
            const { id } = params;
            await connectMongoDB();
            const question = await Questions.findOne({_id: id});

            // if the question's ID is not in DB
            if(!question){
                return NextResponse.json(
                    {message: "Question not found"},
                    {status: 404}
                )
            }

            return NextResponse.json({ question }, {status: 200});

        } catch(error) {
            return NextResponse.json({message: "GET Error", error}, { status: 500})
        }
}


export async function PATCH(request: Request, { params }: {params: {id: String}}) {
    try{ 
        const { id } = params;
        const body = await request.json();
        const editQuestion = {
            "name": body.newName,
            "course": body.newCourse,
            "filepath": body.newFilepath,
            "author": body.newAuthor,
        }
        await connectMongoDB();
        const updateQuestion = await Questions.findByIdAndUpdate(id, editQuestion, {status: 200});

        if(!updateQuestion){
            return NextResponse.json(
                {message: "Question not found"},
                {status: 404}
            )
        }

        return NextResponse.json({message: "Question Updated"}, { status: 200})

    } catch(error) {
        return NextResponse.json({message: "Update Error", error}, { status: 500 })
    }

}

export async function DELETE(request: Request, {params}: {params: {id: string}}) {
    try{

        const { id } = params;

        await connectMongoDB();
        await Questions.findByIdAndDelete(id);

        return NextResponse.json({message: "Question has been deleted"}, {status: 200});

    } catch(error) {
        
        return NextResponse.json({message: "DELETE Error", error}, { status: 500})
    }
}