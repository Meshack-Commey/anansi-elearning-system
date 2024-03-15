import { NextResponse } from "next/server";
import connectMongoDB from '@/helpers/mongodb'
import Admin from '@/models/adminModel'


// GET Admin or Admin URL Query Parameters
// export async function GET(request: NextRequest) {
//     await connectMongoDB();
//     const admins =  await Admin.find();

//     const searchParams = request.nextUrl.searchParams; //search parameters
//     const query = searchParams.get("query");
//     const filteredAdmins = query ? admins.filter(
//         admin => admin.username.includes(query) || 
//                 admin.email.includes(query) || 
//                 admin.roles.includes(query) ) : admins ;
//     return Response.json(filteredAdmins)
// }

export async function GET(){
    await connectMongoDB();
    const admins =  await Admin.find();

    return NextResponse.json({ admins });
}

export async function POST(request: Request) {
    const body = await request.json();
    const newAdmin = {
        "roles": body.roles,
        "username": body.username,
        "firstname": body.firstname,
        "lastname": body.lastname,
        "othername": body.othername,
        "email": body.email,
        "contact": body.contact,
        "password": body.password,
    }

    await connectMongoDB();
    await Admin.create(newAdmin);
    
    return new Response(JSON.stringify(newAdmin), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201,
    })
}