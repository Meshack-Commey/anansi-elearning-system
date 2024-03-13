import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from '@/helpers/mongodb'
import Questions from '@/models/questionsModel'


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
    const question =  await Questions.find();

    return NextResponse.json({ question });
}

export async function POST(request: Request) {
    const body = await request.json();
    const newQuestions = {
        "name": body.name,
        "course": body.course,
        "filepath": body.filepath,
        "author": body.program,
    }

    await connectMongoDB();
    await Questions.create(newQuestions);
    
    return new Response(JSON.stringify(newQuestions), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201,
    })
}