export interface UsersModel {
    idUsuario:          number;
    activo:             boolean;
    fechaCreacion:      string;
    fechaActualizacion: string;
    persona:            PersonaModel;
}

export interface PersonaModel {
    idPersona:          number;
    primerNombre:       string;
    segundoNombre:      string;
    primerApellido:     string;
    segundoApellido:    string;
    apellidoCasada:     string;
    dpi:                string;
    nit:                string;
    pasaporte:          string;
    telefono:           string;
    correo:             string;
    direccion:          string;
    estado:             string;
    categoria:          string;
    rol:                RolModel;
    fechaCreacion:      Date;
    fechaActualizacion: Date;
}

export interface RolModel {
    idRol:         number;
    nombre:        string;
    slug:          string;
    fechaCreacion: Date;
}
