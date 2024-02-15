import { redirect } from 'next/navigation';
import {users} from '../data'


export async function GET(
    _request: Request, 
    { params }: { params: {id: string } }
    ) {
        // Redirects to /api/users if the user's ID is not in DB
        if (parseInt(params.id) > users.length){
            redirect('/api/user');
        } 
        const user = users.find((user) => user.id === parseInt(params.id))
        return Response.json(user)
}

export async function PATCH(
        request: Request, 
        { params }: {params: {id: string}}
    ) {
        const body = await request.json();
        const { username, role, firstname, lastname, email, password } = body;
        const index = users.findIndex(
                user => user.id === parseInt(params.id)
            );
        users[index].username = username;
        users[index].role = role;
        users[index].firstname = firstname;
        users[index].lastname = lastname;
        users[index].email = email;
        users[index].password = password;

        return Response.json(users[index])
}

export async function DELETE(
    request: Request,
    {params}: {params: {id: string}}
    ) {
        const index = users.findIndex(
            user => user.id === parseInt(params.id)
        )
        const deletedUser = users[index];
        users.splice(index, 1);
    return Response.json(deletedUser)
}