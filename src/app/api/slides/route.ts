import { type NextRequest, NextResponse } from "next/server";
import connectMongoDB from '@/helpers/mongodb'
import Slides from '@/models/slidesModel'


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
    const slides =  await Slides.find();

    return NextResponse.json({ slides });
}

export async function POST(request: Request) {
    const body = await request.json();
    const newSlide = {
        "name": body.name,
        "course": body.course,
        "filepath": body.filepath,
        "author": body.program,
    }

    await connectMongoDB();
    await Slides.create(newSlide);
    
    return new Response(JSON.stringify(newSlide), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201,
    })
}