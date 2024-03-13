import connectMongoDB from '@/helpers/mongodb'
import FileCategory from '@/models/filecategoryModel'
import {  NextResponse } from 'next/server';


export async function GET(request: Request, { params }:{params: {id: String}}) {
        try{ 
            const { id } = params;
            await connectMongoDB();
            const category = await FileCategory.findOne({_id: id});

            // if the file's ID is not in DB
            if(!category){
                return NextResponse.json(
                    {message: "File Category not found"},
                    {status: 404}
                )
            }

            return NextResponse.json({ category }, {status: 200});

        } catch(error) {
            return NextResponse.json({message: "GET Error", error}, { status: 500})
        }
}


export async function PATCH(request: Request, { params }: {params: {id: String}}) {
    try{ 
        const { id } = params;
        const body = await request.json();
        const editCategory = {
            "category": body.category,
        }

        await connectMongoDB();
        const updateCategory = await FileCategory.findByIdAndUpdate(id, editCategory, {status: 200});

        if(!updateCategory){
            return NextResponse.json(
                {message: "File Category not found"},
                {status: 404}
            )
        }

        return NextResponse.json({message: "File Category Updated"}, { status: 200})

    } catch(error) {
        return NextResponse.json({message: "Update Error", error}, { status: 500 })
    }

}

export async function DELETE(request: Request, {params}: {params: {id: string}}) {
    try{

        const { id } = params;

        await connectMongoDB();
        await FileCategory.findByIdAndDelete(id);

        return NextResponse.json({message: "File Category has been deleted"}, {status: 200});

    } catch(error) {
        return NextResponse.json({message: "DELETE Error", error}, { status: 500})
    }
}