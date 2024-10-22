import { Cuento_Scene } from "./cuento_scene"
import { Preview } from "./preview"
import { create_scene } from "@/layers/services/scene_generator/t_gen"
import { create_cuento_image_binary } from "./utility"

const PRORROG_SCENE_ID = 'PRORROG'

/**
 * @brief clase para manipular los Cuentos
 * @prop {Cuento_Scene[]} _escenas lista de escenas del cuento
 * @prop {Cuento_Scene} _current_scene escena actual del cuento
 * @prop {number} _current_scene_order orden de la escena actual
 */

export class Cuento extends Preview {
  private _escenas: Cuento_Scene[]
  private _current_scene: Cuento_Scene
  private _current_scene_order: number
  private _story_generator: any

  /**
   * @brief Constructor de la clase Cuento en base a un Preview
   * @param record información de portada del cuento, en base a un Preview
   */

  public constructor(record: Preview) {
    super(record)
    this._escenas = []
    this._current_scene = null
    this._current_scene_order = 0
    this._story_generator = null // TODO: Implementar generador de historias
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

  public start() {
    this._current_scene_order = 0
    this._current_scene = this._escenas[this._current_scene_order]
    return this.current_scene
  }

  /**
   * @brief Avanza a la siguiente escena del cuento
   * @returns {Cuento_Scene} siguiente escena del cuento
   */

  public next_scene() {
    this._current_scene_order += 1
    this._current_scene = this._escenas[this._current_scene_order]
    return this.current_scene
  }

  /**
   * @brief Crea una nueva escena en el cuento
   * @param scene Esqueleto de la escena actual
   * @param input Opcion escogida por el usuario
   */

  public new_scene(scene: Cuento_Scene, input: string) {
    if(!scene){
      return null;  
    }

    if(this._record.size === this._escenas.length){
      return null;
    }

    let new_scene = create_scene({
      scene,
      input
    })
    this.add_scene(new_scene)
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

