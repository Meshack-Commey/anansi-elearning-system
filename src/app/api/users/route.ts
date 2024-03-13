import connectMongoDB from '@/helpers/mongodb'
import User from '@/models/userModel'
import { NextResponse, NextRequest } from 'next/server';
// import { hash } from 'bcrypt'

// GET Admin or Admin URL Query Parameters
// export async function GET(request: NextRequest) {
//     await connectMongoDB();
//     const users =  await User.find();

//     const searchParams = request.nextUrl.searchParams; //search parameters
//     const query = searchParams.get("query");
//     const filteredUsers = query ? users.filter(
//         user => user.username.includes(query) || 
//                 user.email.includes(query) || 
//                 user.roles.includes(query) ) : users ;
//     return NextResponse.json(filteredUsers)
// }

export async function GET(){
    await connectMongoDB();
    const users =  await User.find();

    return NextResponse.json({ users });
}

export async function POST(request: Response){
    
    const body = await request.json();
    // const hashedPassword = await hashed(body.password, 10);
    const newUser = {
        "roles": body.roles,
        "username": body.username,
        "firstname": body.firstname,
        "lastname": body.lastname,
        "othername": body.othername,
        "programme": body.programme,
        "level": body.level,
        "semester": body.semester,
        "email": body.email,
        "contact": body.contact,
        "password": body.password,
    }

    await connectMongoDB();
    await User.create(newUser);
    
    return NextResponse.json({message: "User Created"}, {status: 201});
    
}
