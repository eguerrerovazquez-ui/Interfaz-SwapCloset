import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {NavBar} from './components/nav-bar/nav-bar';
import {Favoritos} from './pages/favoritos/favoritos';
import {Buscar} from './pages/buscar/buscar';
import {Mensajes} from './pages/mensajes/mensajes';
import {Perfil} from './pages/perfil/perfil';

export const routes: Routes = [
  {
    path: '',
    component:NavBar,
    children: [
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path: 'home', component: Home},
      {path: 'favoritos', component: Favoritos},
      {path: 'buscar', component: Buscar},
      {path: 'mensajes', component: Mensajes},
      {path: 'perfil-usuario', component: Perfil}
    ]
  },
  {
    path:'perfil/:userName', component: Perfil
  },
  { path: '**', redirectTo: 'home' }
];
