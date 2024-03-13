import connectMongoDB from '@/helpers/mongodb'
import Files from '@/models/fileModel'
import {  NextResponse } from 'next/server';


export async function GET(request: Request, { params }:{params: {id: String}}) {
        try{ 
            const { id } = params;
            await connectMongoDB();
            const file = await Files.findOne({_id: id});

            // if the file's ID is not in DB
            if(!file){
                return NextResponse.json(
                    {message: "File not found"},
                    {status: 404}
                )
            }

            return NextResponse.json({ file }, {status: 200});

        } catch(error) {
            return NextResponse.json({message: "GET Error", error}, { status: 500})
        }
}


export async function PATCH(request: Request, { params }: {params: {id: String}}) {
    try{ 
        const { id } = params;
        const body = await request.json();
        const editFile = {
            "name": body.name,
            "type": body.type,
            "category": body.category,
            "author": body.author,
            "uploadfile": body.uploadfile,
            "uploadimage": body.uploadimage,
            "description": body.description,
        }

        await connectMongoDB();
        const updateFile = await Files.findByIdAndUpdate(id, editFile, {status: 200});

        if(!updateFile){
            return NextResponse.json(
                {message: "File not found"},
                {status: 404}
            )
        }

        return NextResponse.json({message: "File Updated"}, { status: 200})

    } catch(error) {
        return NextResponse.json({message: "Update Error", error}, { status: 500 })
    }

}

export async function DELETE(request: Request, {params}: {params: {id: string}}) {
    try{

        const { id } = params;

        await connectMongoDB();
        await Files.findByIdAndDelete(id);

        return NextResponse.json({message: "File has been deleted"}, {status: 200});

    } catch(error) {
        return NextResponse.json({message: "DELETE Error", error}, { status: 500})
    }
}