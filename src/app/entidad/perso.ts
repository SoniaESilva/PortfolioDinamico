export class Perso {
    id : number;
    nombre: string;
    apellido : string;
    titulo: string;
    banner : string;
    foto_perfil : string;
    acerca_de : string;
    correo : string;
    contrasenia : string;
    
    
    constructor(id : number, nombre : string, apellido : string, titulo : string, banner : string, foto_perfil : string, acerca_de: string, correo: string, contrasenia : string) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.titulo = titulo;
    this.banner = banner;
    this.foto_perfil= foto_perfil;
    this.acerca_de = acerca_de;
    this.correo = correo;
    this.contrasenia = contrasenia;
 }
}
