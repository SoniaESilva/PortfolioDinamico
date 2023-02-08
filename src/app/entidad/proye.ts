export class Proye {
    id : number;
    nombre : string;
    fecha : string;
    foto : string;
    descripcion : string;
    url : string;
    personaId : number;

    constructor(id: number, nombre : string, fecha : string, foto : string, descripcion : string, url : string, personaId : number) {
    this.id = id;
    this.nombre = nombre;
    this.fecha = fecha;
    this.descripcion = descripcion;
    this.foto = foto;
    this.descripcion = descripcion;
    this.url = url;
    this.personaId = personaId;

    }
}
