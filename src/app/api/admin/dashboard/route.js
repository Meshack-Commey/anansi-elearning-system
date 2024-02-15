import { dashboard } from "./dashdata";

export async function GET() {
    return Response.json(dashboard);
}