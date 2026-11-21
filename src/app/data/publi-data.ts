import { Publi, talla } from '../models/publi';
import { tipos } from '../models/publi';

export const mock_publi: Publi[] = [
  {
    id: 1,
    userPfp: 'assets/stories/img2.png',
    userImage: 'assets/publicaciones/ropa1.png',
    userName: 'LauraCruz_24',
    postLiked: false,
    type: tipos.P,
    userTalla:talla.XS,
    prendaDescripcion:"Es muy cómodo y abriga bastante pero ya no entra en mi ropero"
  },
  {
    id: 2,
    userPfp: 'assets/stories/img1.png',
    userImage: 'assets/publicaciones/ropa2.png',
    userName: 'Sa_Mateo',
    postLiked: false,
    type: tipos.P,
    userTalla:talla.S,
    prendaDescripcion:"No lo uso normalmente así que si alguien quiere usarlo"
  },
  {
    id: 3,
    userPfp: 'assets/stories/img2.png',
    userImage: 'assets/publicaciones/ropa3.png',
    userName: 'LauraCruz_24',
    postLiked: false,
    type: tipos.C,
    userTalla:talla.XS,
    prendaDescripcion:"Hace años que lo quiero dar, asi que lo cambio"
  },
  {
    id: 4,
    userPfp: 'assets/stories/img4.png',
    userImage: 'assets/publicaciones/ropa4.png',
    userName: 'Felipesfc',
    postLiked: false,
    type: tipos.P,
    userTalla:talla.L,
    prendaDescripcion:"Me aprieta un poco, pero no quiero deshacerme de ella asi que la presto"
  },
  {
    id: 5,
    userPfp: 'assets/stories/img3.png',
    userImage: 'assets/publicaciones/ropa5.png',
    userName: 'SofySG',
    postLiked: false,
    type: tipos.C,
    userTalla:talla.L,
    prendaDescripcion:"He bajado de peso asi que me queda grande"
  },
  {
    id: 6,
    userPfp: 'assets/stories/img1.png',
    userImage: 'assets/publicaciones/ropa6.png',
    userName: 'Sa_Mateo',
    postLiked: false,
    type: tipos.C,
    userTalla:talla.S,
    prendaDescripcion:"Me gusta, pero no me lo pongo ya, lo cambio por algo del mismo estilo"
  },
  {
    id: 7,
    userPfp: 'assets/stories/img2.png',
    userImage: 'assets/publicaciones/ropa7.png',
    userName: 'LauraCruz_24',
    postLiked: false,
    type: tipos.P,
    userTalla:talla.XS,
    prendaDescripcion:"Es la chaqueta, perdon no tenia otra foto c:"
  },
];
