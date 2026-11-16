export interface Publi {
  id: number;
  userPfp: string;
  userImage: string;
  userName: string;
  postLiked: boolean;
  type: tipos;
}

export enum tipos{
  P = "Prestamo",
  C = "Cambio",
  A = "Ambos"
}
