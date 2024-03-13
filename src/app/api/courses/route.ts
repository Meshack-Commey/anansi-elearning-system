import { type NextRequest, NextResponse } from "next/server";
import connectMongoDB from '@/helpers/mongodb'
import Courses from '@/models/courseModel'


// GET Courses or Courses URL Query Parameters
// export async function GET(request: NextRequest) {
//     await connectMongoDB();
//     const courses =  await Courses.find();

//     const searchParams = request.nextUrl.searchParams; //search parameters
//     const query = searchParams.get("query");
//     const filteredCourses = query ? courses.filter(
//         course => course.title.includes(query) || 
//                 course.subtitle.includes(query) || 
//                 course.code.includes(query) ) : courses ;
//     return Response.json(filteredCourses)
// }

export async function GET(){
    await connectMongoDB();
    const courses =  await Courses.find();

    return NextResponse.json({ courses });
}

export async function POST(request: Request) {
    const body = await request.json();
    const newCourses = {
        "title": body.title,
        "subtitle": body.subtitle,
        "code": body.code,
        "programme": body.programme,
        "level": body.level,
        "semester": body.semester,
        "description": body.description
    }

    await connectMongoDB();
    await Courses.create(newCourses);
    
    return new Response(JSON.stringify(newCourses), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201,
    })
}