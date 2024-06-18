import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-barra',
  standalone: true,
  imports: [MatSidenavModule, RouterOutlet, RouterLink, CommonModule],
  templateUrl: './barra.component.html',
  styleUrl: './barra.component.css',
})
export class BarraComponent {}
