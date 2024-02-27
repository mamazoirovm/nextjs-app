import { createNames, getNames } from "../data";

export async function GET() {
    return Response.json(getNames())
}

export async function POST(request: Request) {
const body = await request.json()

createNames(body.name)

return Response.json("ok")
}