export class Expe {

    id : number ;
    puesto : string;
    fechaInicio : string;
    fechaFin : string;
    descripcion : string;
    logo : string;
    empresa : string;
    esTrabajoActual : boolean;
    personaId : number;

    constructor(id: number,puesto : string, fechaInicio : string, fechaFin : string, descripcion : string, logo : string, empresa : string, esTrabajoActual : boolean, personaId : number) {
    this.id = id;
    this.puesto = puesto;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.descripcion = descripcion;
    this.logo = logo;
    this.empresa = empresa;
    this.esTrabajoActual = esTrabajoActual;
    this.personaId = personaId;

    }
}

