import { type NextRequest } from "next/server";
import connectMongoDB from '@/helpers/mongodb'
import FileCategory from '@/models/filecategoryModel'


// GET Files or Files URL Query Parameters
export async function GET(request: NextRequest) {
    await connectMongoDB();
    const categories =  await FileCategory.find();

    const searchParams = request.nextUrl.searchParams; //search parameters
    const query = searchParams.get("query");
    const filteredCategories = query ? categories.filter(
        category => category.category.includes(query)  ) : categories ;
    return Response.json(filteredCategories)
}

export async function POST(request: Request) {
    const body = await request.json();
    const newCategory = {
        "category": body.category,
    }

    await connectMongoDB();
    await FileCategory.create(newCategory);
    
    return new Response(JSON.stringify(newCategory), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201,
    })
}