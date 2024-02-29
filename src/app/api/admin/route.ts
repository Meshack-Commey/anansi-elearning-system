import { admin } from './data'

export async function GET(){
    return Response.json(admin)
}