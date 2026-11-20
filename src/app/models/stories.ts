export interface Stories {
  id: number;
  userImage: string;
  userName: string;
  userSeen: boolean;
  userTalla: talla;
  userValoracion: number;
}

export enum talla {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL',
}
