import { NextResponse } from "next/server";
//import { hash } from 'bcryptjs'

export const POST = async (req: Response) => {
    try {
        const {email, password} = await req.json();
        // validate email and password
        console.log({email, password});

        // const hashedPassword = await hash(password, 10);


    } catch(error){
        console.log(error);
    } finally{

    }

    return NextResponse.json({message: 'success'});
}