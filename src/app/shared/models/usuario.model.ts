import { Role } from "@shared/enums";
import { Industria,Proveedor } from "@shared/models";

export interface Usuario {
    idUsuario: number;
    nombre: string;
    correo: string;
    rol_id: number;
    estado: string | null;
    limiteBusquedas: number | null;
    created_at: string | null;
    rol: {
      nombreRol: Role;
    };
    empresas: Industria[] | null;
    proveedores: Proveedor[] | null;
    rut: string | null;
    nombreEmpresa?: string | null;
    nombreProveedor?: string | null;
    encuestaRealizada?: boolean | null;
    nivelEncuesta?: number | null;
  }