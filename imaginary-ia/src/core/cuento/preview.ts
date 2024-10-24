import { Cuento_Record } from "./cuento_record"
/**
 * @brief Clase para almacenar los datos escenciales de los cuentos
 */

export class Preview{
  /**
   * @param {Cuento_Record} _record información de portada del cuento 
   * */ 
  protected _record: Cuento_Record

  
  /**
   * @brief Constructor de la clase Preview
   * @param {Cuento_Record} record información de portada del cuento 
   * */ 

  constructor(record: Cuento_Record | Preview) {
    if(record instanceof Preview) {
      this._record = record._record
    }
    else{
      this._record = record
    }
  }

  /**
   * @brief Getter de la portada del cuentoo
   * @return {Cuento_Record} información de portada del cuento 
   * */ 

  public get record() {
    return this._record
  }

  public is_valid() {
    return true;
  }
}