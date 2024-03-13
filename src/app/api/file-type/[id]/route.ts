import connectMongoDB from '@/helpers/mongodb'
import FileType from '@/models/filetypeModel'
import {  NextResponse } from 'next/server';


export async function GET(request: Request, { params }:{params: {id: String}}) {
        try{ 
            const { id } = params;
            await connectMongoDB();
            const filestype = await FileType.findOne({_id: id});

            // if the file's ID is not in DB
            if(!filestype){
                return NextResponse.json(
                    {message: "File Type not found"},
                    {status: 404}
                )
            }

            return NextResponse.json({ filestype }, {status: 200});

        } catch(error) {
            return NextResponse.json({message: "GET Error", error}, { status: 500})
        }
}


export async function PATCH(request: Request, { params }: {params: {id: String}}) {
    try{ 
        const { id } = params;
        const body = await request.json();
        const editType = {
            "filetype": body.filetype,
        }

        await connectMongoDB();
        const updateType = await FileType.findByIdAndUpdate(id, editType, {status: 200});

        if(!updateType){
            return NextResponse.json(
                {message: "File Type not found"},
                {status: 404}
            )
        }

        return NextResponse.json({message: "File Type Updated"}, { status: 200})

    } catch(error) {
        return NextResponse.json({message: "Update Error", error}, { status: 500 })
    }

}

export async function DELETE(request: Request, {params}: {params: {id: string}}) {
    try{

        const { id } = params;

        await connectMongoDB();
        await FileType.findByIdAndDelete(id);

        return NextResponse.json({message: "File Type has been deleted"}, {status: 200});

    } catch(error) {
        return NextResponse.json({message: "DELETE Error", error}, { status: 500})
    }
}