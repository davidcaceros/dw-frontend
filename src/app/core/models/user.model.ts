import { TokenModel } from "./token.model";

export interface UserModel {
    usuario: string;
    nombre: string;
    rol: string;
    vigente: boolean;
    usuarioMedico: boolean;
    medico?: string|null;
    procedencia?:string;
    pruebasEspeciales?: boolean;
    inicio?:string;
}



export interface UsuarioLogueado {

    "cliente": {
      "codigoCliente": string;
      "nombre": string;
      "vigente": boolean;
      "idVersion": number;
      "versionFront": string;
      "versionBack": string;
      "local": boolean;
    },
    "usuario": UserModel; 
    "token": TokenModel
}