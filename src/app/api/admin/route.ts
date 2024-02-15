import { type NextRequest } from "next/server";
import { admin } from "./data";

// export async function GET() {
//     return Response.json(users)
// }

// GET Users or User URL Query Parameters
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams; //search parameters
    const query = searchParams.get("query");
    const filteredUsers = query ? admin.filter(
        admin => admin.username.includes(query) || 
            admin.email.includes(query) || 
            admin.role.includes(query) ) : admin ;
    return Response.json(filteredUsers)
}

export async function POST(request: Request) {
    const admin = await request.json();
    const newAdmin = {
        "id": admin.length + 1,
        "username": admin.username,
        "role": admin.role,
        "firstname": admin.firstname,
        "lastname": admin.lastname,
        "email": admin.email,
        "password": admin.password,
    }
    admin.push(newAdmin);
    return new Response(JSON.stringify(newAdmin), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201,
    })
}