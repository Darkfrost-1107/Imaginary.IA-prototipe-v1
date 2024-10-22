import { Cuento_Scene } from "./cuento_scene"
import { Preview } from "./preview"
import { create_scene } from "@/layers/services/story_generator/t_gen"
import { create_cuento_image_binary } from "./utility"
import { GeminiService } from "@/layers/services/story_generator/gemini_service";
import { Cuento_Option } from "./cuento_option";

const PRORROG_SCENE_ID = 'PRORROG'

/**
 * @brief clase para manipular los Cuentos
 * @prop {Cuento_Scene[]} _escenas lista de escenas del cuento
 * @prop {Cuento_Scene} _current_scene escena actual del cuento
 * @prop {number} _current_scene_order orden de la escena actual
 * @prop {GeminiService} _story_generator servicio de generación de historias
 */

export class Cuento extends Preview {
  private _escenas: Cuento_Scene[]
  private _current_scene: Cuento_Scene
  private _current_scene_order: number
  private _story_generator: GeminiService;

  /**
   * @brief Constructor de la clase Cuento en base a un Preview
   * @param record información de portada del cuento, en base a un Preview
   */

  public constructor(record: Preview) {
    super(record)
    this._escenas = []
    this._current_scene = null
    this._current_scene_order = 0
    this._story_generator = new GeminiService("AIzaSyDRoSGn9xnCtFgIQCZ74Gr6X8T3eG8iUyM"); // TODO: Implementar generador de historias
  }

  /**
   * @brief Getter de la escena actual del cuento
   */

  public get current_scene() {
    return this._current_scene
  }

  /**
   * @brief Añade una escenas del cuento
   * @param scene Escena a agregar al cuento
   * @returns {Cuento_Scene} escena actual del cuento
   */

  public add_scene(scene: Cuento_Scene) {
    this._escenas.push(scene)
  }

  /**
   * @brief Inicializa el cuento
   * @returns {Cuento_Scene} primera escena del cuento
   */

  public async start() {
    console.log("Iniciando cuento...");
    if (this._escenas.length === 0) {
      return this.new_scene();
    }
    return this;
  }

  /**
   * @brief Avanza a la siguiente escena del cuento
   * @returns {Cuento_Scene} siguiente escena del cuento
   */

  public next_scene() : Cuento_Scene {
    this._current_scene_order += 1
    this._current_scene = this._escenas[this._current_scene_order]
    return this._current_scene
  }

  public async create_next_scene(option: Cuento_Option) {
    // Verifica si se ha alcanzado el límite de escenas
    if (this._escenas.length > this._record.size) {
      console.log("No se pueden agregar más escenas.");
      return null;
    }

    console.log("Enviando opción a la API:", option.label); // Muestra la opción que se está enviando

    // Genera una nueva escena basada en la opción seleccionada
    const responseText = await this._story_generator.sendOptionMessage(option.label); // Enviar la opción a la IA
    console.log("Respuesta de la API:", responseText); // Muestra la respuesta que recibes de la API

    try {
      const jsonResponse = JSON.parse(responseText);
      const { content, options } = jsonResponse.scene;

      const new_scene: Cuento_Scene = {
        id: this._escenas.length.toString(),
        order: this._escenas.length,
        content: content,
        image: {
          url: ""
        },
        options: options
      };

      this.add_scene(new_scene); // Agrega la nueva escena
      this._current_scene = new_scene; // Actualiza la escena actual
      this._current_scene_order += 1; // Incrementa el orden de la escena actual
      return new_scene; // Devuelve la nueva escena
    } catch (error) {
      console.error("Error al parsear la respuesta JSON:", error);
      throw new Error("Formato de respuesta inesperado");
    }
}


  /**
   * @brief Crea una nueva escena en el cuento
   * @param scene Esqueleto de la escena actual
   * @param input Opcion escogida por el usuario
   */

  private async new_scene() {
    // Verifica si se ha alcanzado el límite de escenas
    if (this._record.size === this._escenas.length) {
      console.log("El cuento ya tiene el número máximo de escenas.");
      return null;
    }

    // Solo se manda la descripción y el tamaño la primera vez
    const responseText = await this._story_generator.sendMessage(this._record.synopsis || "", this._record.size);
    try {
      const jsonResponse = JSON.parse(responseText);
      const { content, options } = jsonResponse.scene;

      const new_scene: Cuento_Scene = {
        id: this._escenas.length.toString(),
        order: this._escenas.length,
        content: content,
        image: {
          url: ""
        },
        options: options
      };

      this.add_scene(new_scene);
      this._current_scene = new_scene; // Establece la escena actual
      this._current_scene_order += 1; // Incrementa el orden de la escena actual
      return new_scene; // Devuelve la nueva escena
    } catch (error) {
      console.error("Error al parsear la respuesta JSON:", error);
      throw new Error("Formato de respuesta inesperado");
    }
  }


  public save_story(){

  }
}
// export class Cuento {
//   private _id: string
//   private _titulo: string
//   private _size: number
//   private _escenas: Escena[]
//   private _current_scene: Escena

//   constructor(record: Cuento_Record) {
//     this._id = record._id
//     this._titulo = record._titulo
//     this._size = record._size

//     this._escenas = []
//     this._current_scene = null
//   }

//   public add_scene(escena: Escena) {
//     this._escenas.push(escena)
//   }

//   public new_scene() {
//     let escena = {}

//     this.add_scene(escena)
//   }

//   public start() {
//     this._current_scene = this._escenas[0]
//   }

//   public next_scene(option: Option) {
//     this._current_scene = this._escenas[option.next_scene_id]
//   }
// }

