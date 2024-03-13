import connectMongoDB from '@/helpers/mongodb'
import Programme from '@/models/programmeModel'
import { NextResponse } from 'next/server';

export async function GET(){
    await connectMongoDB();
    const programmes =  await Programme.find();

    return NextResponse.json({ programmes });
}

export async function POST(request: Response){
    
    const body = await request.json();
    const newProgramme = {
        "title": body.title,
        "slogan": body.slogan,
        "department": body.department,
        "level": body.level,
        "description": body.description,
    }

    await connectMongoDB();
    await Programme.create(newProgramme);
    
    return NextResponse.json({message: "Programme Created"}, {status: 201});
    
}