import { Cuento_Scene } from "./cuento_scene"
import { Preview } from "./preview"
import { create_scene } from "@/layers/services/story_generator/t_gen"
import { create_cuento_image_binary } from "./utility"
import { GeminiService } from "@/layers/services/story_generator/gemini_service";
import { Cuento_Option } from "./cuento_option";
import { Cuento_Generator } from "./cuento_generator";
import { create_and_upload_image } from "@/layers/services/image_generator/i_gen";

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
  private _story_generator: Cuento_Generator;

  /**
   * @brief Constructor de la clase Cuento en base a un Preview
   * @param record información de portada del cuento, en base a un Preview
   */

  public constructor(record: Preview) {
    super(record)
    this._escenas = []
    this._current_scene = null
    this._current_scene_order = 0
    this._story_generator = new Cuento_Generator(record); // TODO: Implementar generador de historias
  }

  /**
   * @brief Getter de la escena actual del cuento
   */

  public get current_scene() {
    return this._current_scene
  }

  public get escenas() {
    return this._escenas
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

  public async create_next_scene(option: string) {
    // Verifica si se ha alcanzado el límite de escenas
    // if (this._escenas.length > this._record.size) {
    //   console.log("No se pueden agregar más escenas.");
    //   return null;
    // }

    console.log("Enviando opción a la API:", option); // Muestra la opción que se está enviando

    // Genera una nueva escena basada en la opción seleccionada
    const responseText = await this._story_generator.new_scene(option, this._escenas.length); // Enviar la opción a la IA
    console.log("Respuesta de la API:", responseText); // Muestra la respuesta que recibes de la API

    try {
      const jsonResponse = JSON.parse(responseText);
      const { content, options } = jsonResponse.scene;

      const new_scene: Cuento_Scene = {
        id: this._escenas.length.toString(),
        order: this._escenas.length,
        content: content,
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

    const responseText = await this._story_generator.new_scene(undefined, this._escenas.length)
    // Solo se manda la descripción y el tamaño la primera vez
    try {
      const jsonResponse = JSON.parse(responseText);
      const { content, options } = jsonResponse.scene;
      
      const imageUrl = "" //await create_and_upload_image(content);

      const new_scene: Cuento_Scene = {
        id: this._escenas.length.toString(),
        order: this._escenas.length,
        content: content,
        options: options
      };

      this._record.imagen = {
        url: imageUrl || "",
        status: true
      }

      this.add_scene(new_scene);
      this._current_scene = new_scene; // Establece la escena actual
      this._current_scene_order += 1; // Incrementa el orden de la escena actual


      return new_scene; // Devuelve la nueva escena
    } catch (error) {
      console.error("Error al parsear la respuesta JSON:", error);
      throw new Error("Formato de respuesta inesperado");
    }
  }

  // Función para generar la imagen y actualizar la escena
  private async generateAndSetImage(scene: Cuento_Scene, content: string) {
    try {
        const imageUrl = await create_and_upload_image(content);
        console.log("Imagen generada:", imageUrl);
        // Asegúrate de que la escena no sea null antes de actualizarla
        if (this._record.imagen) {
            this._record.imagen.url = imageUrl;
            // Aquí puedes llamar a un método para notificar a la UI que la escena ha sido actualizada
        }
    } catch (error) {
        console.error("Error al generar la imagen:", error);
    }
  }

  public save_story(){
    const url = ""
    const r = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this._record)
    })
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

