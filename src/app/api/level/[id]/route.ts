import connectMongoDB from '@/helpers/mongodb'
import Level from '@/models/levelModel'
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest, {params}:{params: {id: String}}) => {
    try{
        const { id } = params;
        await connectMongoDB();
        const level = await Level.findOne({_id: id});

        if(!level){
            return NextResponse.json(
                {message: "Level not found"},
                {status: 404}
            )
        }

        return NextResponse.json({ level }, {status: 200});

    } catch(error) {
        return NextResponse.json({message: "GET Error", error}, { status: 500})
    }
}

export const PUT = async (request: NextRequest, {params}:{params: {id: String}}) => {
    try{
        const { id } = params;

        const body = await request.json();
        const editLevel = {
            "title": body.title,
            "value": body.value,
        }

        await connectMongoDB();
        const updateLevel = await Level.findByIdAndUpdate(id, editLevel, {status: 200});

        if(!updateLevel){
            return NextResponse.json(
                {message: "Level not found"},
                {status: 404}
            )
        }

        return NextResponse.json({message: "Level Updated"}, { status: 200})

    } catch(error) {
        return NextResponse.json({message: "Update Error", error}, { status: 500 })
    }
}

export const DELETE = async (request: NextRequest, {params}:{params: {id: String}}) => {
    try{
        
        const { id } = params;

        await connectMongoDB();
        await Level.findByIdAndDelete(id);

        return NextResponse.json({message: "Level has been deleted"}, {status: 200});

    } catch(error) {
        return NextResponse.json({message: "DELETE Error", error}, { status: 500})
    }
}