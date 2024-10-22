import { Cuento_Image } from "./cuento_image"
/**
 * @brief Estructura para la informacion de la portada de los cuentos
 * @param {string} id identificador del cuento para acceder
 * @param {string} titulo del cuento
 * @param {number} size numero de escenas del cuento
 * @param {Cuento_Image} imagen portada del cuento
 * @param {string} synopsis resumen del cuento
 * @param {string} autor_id identificador del autor del cuento
 */

export type Cuento_Record = {
  id          : string
  titulo      : string
  size        : number
  scene_size? : number
  imagen?     : Cuento_Image
  synopsis?   : string
  autor_id?   : string
  topics?     : string
}