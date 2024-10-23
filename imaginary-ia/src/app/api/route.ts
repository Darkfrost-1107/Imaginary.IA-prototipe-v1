import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest } from 'next/server'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}

export async function GET(
  req : NextRequest
){


  const data = {
    "Hello": "World"
  }
  return Response.json({ data })
}