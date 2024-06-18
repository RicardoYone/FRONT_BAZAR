import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from '../../routes/main/compras/compras.component';
import { VentasComponent } from '../../routes/main/ventas/ventas.component';
import { DashboardComponent } from '../../routes/main/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'compras',
    component: ComprasComponent,
  },
  {
    path: 'ventas',
    component: VentasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarraRoutingModule {}
