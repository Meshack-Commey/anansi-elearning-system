import { type NextRequest } from "next/server";
import { users } from "./data";

// export async function GET() {
//     return Response.json(users)
// }

// GET Users or User URL Query Parameters
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams; //search parameters
    const query = searchParams.get("query");
    const filteredUsers = query ? users.filter(
        user => user.username.includes(query) || 
                user.email.includes(query) || 
                user.role.includes(query) ) : users ;
    return Response.json(filteredUsers)
}

export async function POST(request: Request) {
    const user = await request.json();
    const newUser = {
        "id": users.length + 1,
        "username": user.username,
        "role": user.role,
        "firstname": user.firstname,
        "lastname": user.lastname,
        "email": user.email,
        "password": user.password,
    }
    users.push(newUser);
    return new Response(JSON.stringify(newUser), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201,
    })
}