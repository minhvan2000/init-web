import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/layouts/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/layouts/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
