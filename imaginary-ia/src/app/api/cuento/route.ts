import { Preview } from "@/layers/core/cuento/preview"
import prisma from "@/layers/services/database_connector/prisma"
import { NextRequest } from "next/server"

export async function POST(
  req: NextRequest,
){
  const data = await req.json()
  let preview = new Preview(data)

  prisma.template.create({
    data:{
      titulo: preview.record.titulo,
      synopsis: preview.record.synopsis || "",
      imagen: preview.record.imagen.url,
    }
  })

  return Response.json({data})
}