import { Preview } from "@/layers/core/cuento/preview"
import prisma from "@/layers/services/database_connector/prisma"
import { OPERATION_STATUS } from "@/layers/services/status"
import { NextRequest } from "next/server"


// CREAR CUENTO
export async function POST(
  req: NextRequest,
){
  const data = await req.json()
  let preview = new Preview(data)

  if(preview.is_valid() == false){
    let template = await prisma.template.create({
      data:{
        titulo: preview.record.titulo,
        synopsis: preview.record.synopsis || "",
        imagen: preview.record.imagen?.url || "",
        scene_size: preview.record.scene_size || 75,
        size: preview.record.size,
      }
    })

    return Response.json({
      message: "Cuento creado",
      status: OPERATION_STATUS.SUCCESS,
      data: template
    })

  } else {
    return Response.json({
      message: "Invalid data",
      status: OPERATION_STATUS.INVALID_DATA,
    })
  }

  return Response.json({data})
}

export async function GET(){
  try{
    const templates = await prisma.template.findMany()
    return Response.json({
      message: "Operacion exitosa",
      status: OPERATION_STATUS.SUCCESS,
      data: templates
    }) 
  } catch (error) {
    return Response.json({
      message: "Error al obtener los cuentos",
      status: OPERATION_STATUS.FAILURE,
      data: error
    })
  }
  
}