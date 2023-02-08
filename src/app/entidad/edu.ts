export class Edu {

    id : number;
    establecimiento: string;
    titulo: string;
    fechaInicio : string;
    fechaFin : string;
    logo : string;
    esEstudioActual : boolean;
    personaId : number;

    constructor(id: number, establecimiento : string, titulo : string, fechaInicio : string, fechaFin : string, logo : string, esEstudioActual : boolean, personaId : number) {
    this.id = id;
    this.establecimiento = establecimiento;
    this.titulo = titulo;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.logo = logo;
    this.esEstudioActual = esEstudioActual;
    this.personaId = personaId;

    }

}
