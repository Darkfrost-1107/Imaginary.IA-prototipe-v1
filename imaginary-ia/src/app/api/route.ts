import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest } from 'next/server'
 
type ResponseData = {
  message: string
}
 

export async function GET(
  req : NextRequest
){


  const data = {
    "Hello": "World"
  }
  return Response.json({ data })
}