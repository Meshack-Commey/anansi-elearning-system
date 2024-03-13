import {NextResponse} from 'next/server'
import prisma from '../../../helpers/server-helpers'

export const GET = async () => {
    try{
        const posts = await prisma.post.findMany()

        return NextResponse.json(posts);
        
    } catch(error) {
        return NextResponse.json({message: "GET Error", error}, {status: 500})
    }
}

export const POST = async (request) => {
    try{
        const body = await request.json();
        const {title, description} = body;

        const newPost = await prisma.post.create({
            data: {
                title,
                description
            }
        })

        return NextResponse.json(newPost);

    } catch(error){
        return NextResponse.json({message: "POST Error", error}, {status: 500})
    }
}
