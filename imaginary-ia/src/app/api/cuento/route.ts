export async function GET(
  req: Request,
){
  const data = {
    "Hello": "World"
  }
 
  return Response.json({ data })
}