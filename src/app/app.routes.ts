import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {NavBar} from './components/nav-bar/nav-bar';

export const routes: Routes = [
  {
    path: '',
    component:NavBar,
    children: [
      {path: '', component: Home},
    ]
  },
  { path: '**', redirectTo: 'nav-bar' }
];
