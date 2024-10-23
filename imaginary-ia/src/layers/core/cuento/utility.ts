import { GET } from "@/app/api/route"

export function async_read_cuentos(page: number, handler: (data: any) => void){
  page = page || 0
  const url = "" +`?page=${page}`
  const r = fetch(url)
  r.then((res) => res.json()).then(handler)
}