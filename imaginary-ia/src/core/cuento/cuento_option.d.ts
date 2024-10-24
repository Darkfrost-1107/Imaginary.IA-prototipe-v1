
/**
 * @brief Estructura para las Opciones de las Escenas
 * @param {string} id identificador de la Opcion
 * @param {string} label texto de la Opcion
 * @param {string} next_scene identificador de la Escena a la que se dirige
 * @param {OPTION_ACTION} action tipo de accion que se va a realizar
 */
export type Cuento_Option = string

/**
 * @brief Enumeracion para las acciones de las opciones
 * @prop {CREATE} CREATE Crear una Nueva Escena
 * @prop {READ} READ Leer la Escena Existente
 */

export enum OPTION_ACTION {
  CREATE,
  READ,
}