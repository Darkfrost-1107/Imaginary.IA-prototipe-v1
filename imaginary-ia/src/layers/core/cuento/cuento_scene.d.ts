import { Cuento_Image } from "./cuento_image"
import { Cuento_Option } from "./cuento_option"
/**
 * @brief Estructura para las Escenas del Cuento
 * @param {string} id identificador de la Escena
 * @param {string} content contenido de la Escena
 * @param {Cuento_Image} image imagen del contenido de la Escena
 * @param {Cuento_Option[]} options Conjunto de opciones de la interaccon de la Escena Actual 
 */

export type Cuento_Scene = {
  id: string
  order: number
  content: string
  image: Cuento_Image
  options: Cuento_Option[]
} | null