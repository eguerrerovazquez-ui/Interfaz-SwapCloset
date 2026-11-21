export interface Publi {
  id: number;
  userPfp: string;
  userImage: string;
  userName: string;
  postLiked: boolean;
  type: tipos;
  userTalla: talla;
  prendaDescripcion: string;
}

export enum tipos{
  P = "Prestamo",
  C = "Cambio",
  A = "Ambos"
}

export enum talla {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL'
}
