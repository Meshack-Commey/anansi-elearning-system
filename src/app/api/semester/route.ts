import { semester } from './data'

export async function GET() {
    return Response.json(semester)
}