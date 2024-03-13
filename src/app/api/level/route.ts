import connectMongoDB from '@/helpers/mongodb'
import Level from '@/models/levelModel'
import { NextRequest, NextResponse } from 'next/server';


export async function GET(){
    await connectMongoDB();
    const levels =  await Level.find();

    return NextResponse.json({ levels });
}

export async function POST(request: NextRequest){
    
    const body = await request.json();
    const newLevel = {
        "title": body.title,
        "value": body.value,
    }

    await connectMongoDB();
    await Level.create(newLevel);
    
    return NextResponse.json({message: "Level Created"}, {status: 201});
    
}