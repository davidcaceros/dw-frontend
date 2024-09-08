import { UserModel } from "./user.model";
import { TokenModel } from "./token.model";

export interface LoginModel {

    "cliente": {
      "codigoCliente": string;
      "nombre": string;
      "vigente": boolean;
      "idVersion": number;
      "versionFront": string;
      "versionBack": string;
      "local": boolean;
    },
    "usuario": UserModel /* {
        "usuario": string;
        "nombre": string;
        "rol": string;
        "vigente": boolean;
        "usuarioMedico": boolean;
        "medico": string;
        "pruebasEspeciales": boolean;
    } */
    "token": TokenModel
  }