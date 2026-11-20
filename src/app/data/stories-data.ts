import { Stories, talla } from '../models/stories';

export const mock_story: Stories[] = [
  {
    id: 1,
    userImage: 'assets/stories/img1.png',
    userName: 'Sa_Mateo',
    userSeen: true,
    userTalla: talla.S,
    userValoracion: 5,
  },
  {
    id: 2,
    userImage: 'assets/stories/img2.png',
    userName: 'LauraCruz_24',
    userSeen: true,
    userTalla: talla.XS,
    userValoracion: 4,
  },
  {
    id: 3,
    userImage: 'assets/stories/img3.png',
    userName: 'SofySG',
    userSeen: true,
    userTalla: talla.M,
    userValoracion: 3,
  },
  {
    id: 4,
    userImage: 'assets/stories/img4.png',
    userName: 'Felipesfc',
    userSeen: true,
    userTalla: talla.L,
    userValoracion: 5,
  },
];
