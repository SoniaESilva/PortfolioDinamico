export class Skill {
    id : number;
    nombreHabilidad: string;
    porcentaje : string;
    personaId : number;

    constructor(id : number,nombreHabilidad : string, porcentaje : string, personaId : number) {
    this.id = id;
    this.nombreHabilidad = nombreHabilidad;
    this.porcentaje = porcentaje;
    this.personaId = personaId;
  }
}
