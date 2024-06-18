import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BarraComponent } from '../../components/barra/barra.component';
import { MainRoutingModule } from './main-routing.module';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    MainRoutingModule,
    HeaderComponent,
    FooterComponent,
    BarraComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  onSidenavChange(event: any) {
    // Aquí puedes manejar el cambio en el panel lateral
    console.log('El panel lateral cambió:', event);
  }
}
