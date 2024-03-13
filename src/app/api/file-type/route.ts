import { type NextRequest } from "next/server";
import connectMongoDB from '@/helpers/mongodb'
import FileType from '@/models/filetypeModel'


// GET Files or Files URL Query Parameters
export async function GET(request: NextRequest) {
    await connectMongoDB();
    const filetypes =  await FileType.find();

    const searchParams = request.nextUrl.searchParams; //search parameters
    const query = searchParams.get("query");
    const filteredTypes = query ? filetypes.filter(
        ftype => ftype.filetype.includes(query)  ) : filetypes ;
    return Response.json(filteredTypes)
}

export async function POST(request: Request) {
    const body = await request.json();
    const newType = {
        "filetype": body.filetype
    }

    await connectMongoDB();
    await FileType.create(newType);
    
    return new Response(JSON.stringify(newType), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201,
    })
}