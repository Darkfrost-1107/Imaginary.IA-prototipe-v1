import { GeminiService } from "@/layers/services/story_generator/gemini_service";
import { Preview } from "./preview";

const GeminiKEYs = [
  "AIzaSyDRoSGn9xnCtFgIQCZ74Gr6X8T3eG8iUyM"
];

const ban_list : string[] = [

]

export class Cuento_Generator {
  private _chat: GeminiService;
  private _scene_number: number;
  private _scene_size: number;
  private _story_syn: string;
  private _story_topics: string;

  constructor(story: Preview) {
    this._chat = new GeminiService(GeminiKEYs[Math.floor(
      Math.random() * GeminiKEYs.length
    )]);
    this._scene_number = story.record.size;
    this._story_syn = story.record.synopsis || "";
    this._scene_size = story.record.scene_size || 75;
    this._story_topics = story.record.topics || "";
  }

  public async new_scene(input: string | undefined, n: number) {
    const sceneDesc = input || this._story_syn;

    // Validar el contenido antes de crear el cuento
    const validationResult = await this.validate_content(sceneDesc);
    if (validationResult === "[PELIGRO]") {
      return "Advertencia: El contenido contiene elementos inapropiados para niños.";
    }

    let prompt: string = this.generate_create_prompt({
      scene_desc: sceneDesc,
      scene_numb: n,
      scene_size: this._scene_size
    }, this._scene_number);

    return this._chat.sendMessage(prompt);
  }

  private async validate_content(scene_desc: string) {
    const validationPrompt = `
      Eres un analista de contenido experto con amplia experiencia en la revisión de textos para garantizar que sean apropiados para audiencias infantiles. Tienes un agudo sentido para identificar cualquier contenido que pueda ser considerado delicado o perjudicial, como violencia, abuso, tragedias y situaciones que provoquen incomodidad o miedo.

      Tu tarea es validar un texto proporcionado y asegurarte de que no contenga contenido prohibido para niños. Debes devolver el resultado como [SEGURO] si el texto es adecuado y no plantea ningún problema, y [PELIGRO] si identificas algún contenido inapropiado.

      Aquí tienes el texto a validar: "${scene_desc}"
    `;

    // Llama a la API para validar el contenido
    const response = await this._chat.sendMessage(validationPrompt);
    console.log(response);
    return response;
  }

  private generate_create_prompt({ scene_desc, scene_numb, scene_size }: Cuento_Scene_Options, max_size: number) {
    let prompt = "";
    if (scene_numb == 0) {
      prompt = `
        Eres un escritor de cuentos infantiles creativo y especializado en la creación de historias interactivas adecuadas para niños de 5 a 11 años. Tu misión es fomentar valores como la amistad, la curiosidad y la resolución pacífica de conflictos, evitando cualquier contenido inapropiado o sensible.

        Tu tarea es generar un cuento interactivo para niños. Primero, valida la entrada con la descripción de la escena proporcionada: "${scene_desc}". Si detectas contenido inapropiado, responde con una advertencia clara en el formato: "Advertencia: [descripción del problema]". Si la entrada es adecuada, procede a crear un cuento interactivo seguro y positivo basado en la descripción "${scene_desc}".

        El tono del cuento debe ser amable, divertido y educativo, utilizando un lenguaje accesible y atractivo para los niños. Evita referencias a temas negativos, como la violencia o la tristeza. Enfócate en cultivar temas de amistad, trabajo en equipo y la imaginación.

        El estilo narrativo debe inspirarse en autores de cuentos clásicos, con un tono cálido y lleno de fantasía. Utiliza un lenguaje evocador y descripciones mágicas que enamoren a los jóvenes lectores, transmitiendo al mismo tiempo lecciones de vida valiosas.

        El cuento debe dividirse en exactamente ${max_size} escenas, donde cada escena contenga aproximadamente ${scene_size} palabras. Al final de cada escena, proporciona 3 opciones claras y positivas para que el usuario decida cómo avanzar la historia, además de una opción de "Continuar libremente" para fomentar la creatividad, siempre dentro de parámetros seguros y positivos.

        Asegúrate de que el cuento tenga un cierre satisfactorio y que se respete el número exacto de escenas especificadas. Detente después de cada escena y espera que el usuario seleccione una opción antes de continuar. También incluye una breve referencia a la elección del usuario en cada escena para asegurar la continuidad de la narrativa.
      `;
    } else if (scene_numb == max_size) {
      prompt = `El usuario ha elegido la opción: ${scene_desc}. Termina la historia`;
    } else {
      prompt = `El usuario ha elegido la opción: ${scene_desc}. Continúa la historia, faltan ${max_size - (scene_numb || 0)}`;
    }

    return prompt;
  }

  public is_valid(prompt: string){
    return !ban_list.some(word => prompt.includes(word))
  }
}

type Cuento_Scene_Options = {
  scene_size?: number;
  scene_numb?: number;
  scene_desc?: string;
};
