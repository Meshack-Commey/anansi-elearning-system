import connectMongoDB from '@/helpers/mongodb'
import Semester from '@/models/semesterModel'
import { NextResponse } from 'next/server';


export async function GET(){
    await connectMongoDB();
    const semesters =  await Semester.find();

    return NextResponse.json({ semesters });
}

export async function POST(request: Response){
    
    const body = await request.json();
    const newSemester = {
        "title": body.title,
        "value": body.value,
    }

    await connectMongoDB();
    await Semester.create(newSemester);
    
    return NextResponse.json({message: "Semester Created"}, {status: 201});
    
}