import { GeminiService } from "@/layers/services/story_generator/gemini_service";
import { Preview } from "./preview";

const GeminiKEYs = [
  "AIzaSyDRoSGn9xnCtFgIQCZ74Gr6X8T3eG8iUyM"
]

const ban_list : string[] = [

]

export class Cuento_Generator {
  private _chat : GeminiService
  private _scene_number : number
  private _scene_size: number
  private _story_syn : string
  private _story_topics : string
  
  constructor(story: Preview){
    this._chat = new GeminiService(GeminiKEYs[Math.floor(
      Math.random() * GeminiKEYs.length
    )])
    this._scene_number = story.record.size
    this._story_syn = story.record.synopsis || ""
    this._scene_size = story.record.scene_size || 75
    this._story_topics = story.record.topics || ""
  }

  public new_scene(input: string | undefined, n: number){
    let prompt : string
    prompt = this.generate_create_prompt({
      scene_desc: input || this._story_syn,
      scene_numb: n,
      scene_size: this._scene_size
    }, this._scene_number)

    return this._chat.sendMessage(prompt)
  }

  private generate_create_prompt({scene_desc, scene_numb, scene_size}: Cuento_Scene_Options, max_size: number){
    let prompt = ""
    if(scene_numb == 0){
        prompt = `Escribe un cuento interactivo sobre "${scene_desc}". 
        El cuento debe tener exactamente ${max_size} escenas, cada una de aproximadamente ${scene_size} palabras. 
        Al final de cada escena, presenta 3 opciones para que el usuario elija cómo continuar la historia, 
        incluyendo una opción adicional para que el usuario elija continuar la historia de manera libre. 
        Asegúrate de que el cuento llegue a un final satisfactorio en ese número exacto de escenas y no se sobrepase.
  
        Detente después de cada escena y espera a que el usuario seleccione una opción para avanzar. Tambien considera incluir en la escena la eleccion del usuario
        `
    } else if (scene_numb == max_size){
        prompt = `El usuario ha elegido la opción: ${scene_desc}. Termina la historia`
    } else {
        prompt = `El usuario ha elegido la opción: ${scene_desc}. Continúa la historia, faltan ${max_size - (scene_numb || 0)}`
    }
  
    return prompt
  }

  public is_valid(prompt: string){
    return !ban_list.some(word => prompt.includes(word))
  }
}

type Cuento_Scene_Options = {
  scene_size?: number;
  scene_numb?: number;
  scene_desc?: string;
}

