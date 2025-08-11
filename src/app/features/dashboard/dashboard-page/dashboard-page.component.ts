import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../../../shared/components/header/header.component';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
import { TopbarComponent } from '../../../shared/components/topbar/topbar.component';
import { StatsPieComponent } from '../stats-pie/stats-pie.component';
import { TaskStatusComponent } from '../task-status/task-status.component';
import { TasksTableComponent } from '../tasks-table/tasks-table.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    TopbarComponent,
    StatsPieComponent,
    TasksTableComponent,
    TaskStatusComponent,
    FooterComponent,
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export class DashboardPageComponent {}
