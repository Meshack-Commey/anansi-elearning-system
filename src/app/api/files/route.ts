import { type NextRequest } from "next/server";
import connectMongoDB from '@/helpers/mongodb'
import Files from '@/models/fileModel'


// GET Files or Files URL Query Parameters
export async function GET(request: NextRequest) {
    await connectMongoDB();
    const files =  await Files.find();

    const searchParams = request.nextUrl.searchParams; //search parameters
    const query = searchParams.get("query");
    const filteredFiles = query ? files.filter(
        file => file.name.includes(query) || 
                file.author.includes(query) || 
                file.description.includes(query) ) : files ;
    return Response.json(filteredFiles)
}

export async function POST(request: Request) {
    const body = await request.json();
    const newFile = {
        "name": body.name,
        "type": body.type,
        "category": body.category,
        "author": body.author,
        "uploadfile": body.uploadfile,
        "uploadimage": body.uploadimage,
        "description": body.description,
    }

    await connectMongoDB();
    await Files.create(newFile);
    
    return new Response(JSON.stringify(newFile), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201,
    })
}