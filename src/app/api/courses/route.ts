import { courses } from './data'

export async function GET() {
    const len = courses.length;

    return Response.json(len)
}