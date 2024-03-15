import { level } from './data'

export async function GET() {
    return Response.json(level)
}