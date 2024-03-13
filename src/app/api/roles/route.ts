import connectMongoDB from '@/helpers/mongodb'
import Roles from '@/models/rolesModel'
import { NextRequest, NextResponse } from 'next/server';


export async function GET(){
    await connectMongoDB();
    const roles =  await Roles.find();

    return NextResponse.json({ roles });
}

export async function POST(request: NextRequest){
    
    const body = await request.json();
    const newRole = {
        "role": body.role
    }

    await connectMongoDB();
    await Roles.create(newRole);
    
    return NextResponse.json({message: "User Role Created"}, {status: 201});
    
}