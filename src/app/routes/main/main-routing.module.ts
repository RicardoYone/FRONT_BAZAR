import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarraComponent } from '../../components/barra/barra.component';

const routes: Routes = [
  {
    path: '',
    // component: BarraComponent,
    loadChildren: () =>
      import('../../components/barra/barra.module').then((m) => m.BarraModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
