import { Routes } from '@angular/router';
import { LoginComponent } from './routes/login/login.component';
import { MainComponent } from './routes/main/main.component';
import { RegistrarseComponent } from './routes/registrarse/registrarse.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    loadChildren: () =>
      import('./routes/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registrarse',
    component: RegistrarseComponent,
  },
];
