import { Cuento_Image } from "./cuento_image";
import { create_image } from "@/layers/services/image_generator/i_gen";

export function create_cuento_image_binary(input: string){
  return {
    url: create_image(input)
  }  
}

export function create_cuento_image_url(input: string){
  return {
    data: create_image(input)
  }
}