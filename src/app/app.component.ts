import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DashboardPageComponent } from './features/dashboard/dashboard-page/dashboard-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'assesment-dashboard';
}
