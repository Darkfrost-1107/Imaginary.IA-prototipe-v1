import { GET } from "@/app/api/route"
import { Preview } from "./preview"

export function async_cuentos_read_templates(page: number, handler: (data: Preview[]) => void){
  page = page || 0
  const url = "/api/cuento" +`?page=${page}`
  const r = fetch(url)
  r.then((res) => res.json()).then((data) => {
    const cuentos : Preview[] = 
    data.data.map((elem: any) => {
      return new Preview({
        id: elem.id,
        titulo: elem.titulo,
        size: elem.size,
        synopsis: elem.synopsis,
        imagen: {
          url: elem.imagen,
          status: true
        },
        scene_size: elem.scene_size
      })
    })

    return cuentos
  }).then(handler)
}