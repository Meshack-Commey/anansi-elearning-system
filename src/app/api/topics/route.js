import connectMongoDB from '@/helpers/mongodb'
import Topics from '@/models/topicsModel'
import { NextResponse } from 'next/server';


export async function POST(request){
    
    const body = await request.json();
    const { title, description } = body;
    await connectMongoDB();
    await Topics.create({ title, description });
    
    return NextResponse.json({message: "Topic Created"}, {status: 201});
    
}

export async function GET(){
    return Response.json("get all topics")
}