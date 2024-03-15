import { programmes } from './data'

export async function GET() {
    return Response.json(programmes)
}