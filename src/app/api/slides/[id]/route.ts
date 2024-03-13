import connectMongoDB from '@/helpers/mongodb'
import Slides from '@/models/slidesModel'
import {  NextResponse } from 'next/server';


export async function GET(request: Request, { params }:{params: {id: String}}) {
        try{ 
            const { id } = params;
            await connectMongoDB();
            const slide = await Slides.findOne({_id: id});

            // if the question's ID is not in DB
            if(!slide){
                return NextResponse.json(
                    {message: "Slide not found"},
                    {status: 404}
                )
            }

            return NextResponse.json({ slide }, {status: 200});

        } catch(error) {
            return NextResponse.json({message: "GET Error", error}, { status: 500})
        }
}


export async function PATCH(request: Request, { params }: {params: {id: String}}) {
    try{ 
        const { id } = params;
        const body = await request.json();
        const editSlide = {
            "name": body.newName,
            "course": body.newCourse,
            "filepath": body.newFilepath,
            "author": body.newAuthor,
        }
        await connectMongoDB();
        const updateSlide = await Slides.findByIdAndUpdate(id, editSlide, {status: 200});

        if(!updateSlide){
            return NextResponse.json(
                {message: "Slide not found"},
                {status: 404}
            )
        }

        return NextResponse.json({message: "Slide Updated"}, { status: 200})

    } catch(error) {
        return NextResponse.json({message: "Update Error", error}, { status: 500 })
    }

}

export async function DELETE(request: Request, {params}: {params: {id: string}}) {
    try{

        const { id } = params;

        await connectMongoDB();
        await Slides.findByIdAndDelete(id);

        return NextResponse.json({message: "Slide has been deleted"}, {status: 200});

    } catch(error) {
        
        return NextResponse.json({message: "DELETE Error", error}, { status: 500})
    }
}