import { redirect } from 'next/navigation';
import { admin } from '../data'


export async function GET(
    _request: Request, 
    { params }: { params: {id: string } }
    ) {
        // Redirects to /api/users if the user's ID is not in DB
        if (parseInt(params.id) > admin.length){
            redirect('/api/admin');
        } 
        const user = admin.find((admin) => admin.id === parseInt(params.id))
        return Response.json(admin)
}

export async function PATCH(
        request: Request, 
        { params }: {params: {id: string}}
    ) {
        const body = await request.json();
        const { username, role, firstname, lastname, email, password } = body;
        const index = admin.findIndex(
                admin => admin.id === parseInt(params.id)
            );
        admin[index].username = username;
        admin[index].role = role;
        admin[index].firstname = firstname;
        admin[index].lastname = lastname;
        admin[index].email = email;
        admin[index].password = password;

        return Response.json(admin[index])
}

export async function DELETE(
    request: Request,
    {params}: {params: {id: string}}
    ) {
        const index = admin.findIndex(
            admin => admin.id === parseInt(params.id)
        )
        const deletedUser = admin[index];
        admin.splice(index, 1);
    return Response.json(deletedUser)
}