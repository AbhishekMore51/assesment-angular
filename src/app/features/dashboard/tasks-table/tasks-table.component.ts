import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';
import { FilterComponent } from '../../../shared/components/filter/filter.component';
import { FormsModule } from '@angular/forms';

interface Task {
  id: string;
  name: string;
  gender: string;
  mobile: string;
  whatsapp: string;
  email: string;
  language: string;
  time: string;
  status: string;
}

@Component({
  selector: 'app-tasks-table',
  standalone: true,
  imports: [CommonModule, PaginationComponent, FilterComponent, FormsModule],
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.scss'],
})
export class TasksTableComponent {
  currentPage = 1;
  itemsPerPage = 5;
  totalPages = 1;
  paginatedTasks: Task[] = [];
  filteredTasks: Task[] = [];
  tasks = [
    {
      id: 'T1234',
      name: 'Pintu Pal',
      gender: 'M',
      mobile: '+91 932******',
      whatsapp: '+91 932******',
      email: 'Pin*@gmail.com',
      language: 'English',
      time: '10:00 AM IST',
      status: 'Completed',
    },
    {
      id: 'T1235',
      name: 'Mallika Chawla',
      gender: 'F',
      mobile: '+91 704******',
      whatsapp: '+91 704******',
      email: 'sim*@yahoo.com',
      language: 'English',
      time: '02:00 PM IST',
      status: 'Pending',
    },
    {
      id: 'T1236',
      name: 'Swapni Dhule',
      gender: 'M',
      mobile: '+91 984******',
      whatsapp: '+91 984******',
      email: 'swa*@gmail.com',
      language: 'English',
      time: '10:00 AM IST',
      status: 'WIP',
    },
    {
      id: 'T1234',
      name: 'Pintu Pal',
      gender: 'M',
      mobile: '+91 932*******',
      whatsapp: '+91 932*******',
      email: 'Pin***@gmail.com',
      language: 'English',
      time: '10:00 AM IST',
      status: 'Completed',
    },
    {
      id: 'T1234',
      name: 'Pintu Pal',
      gender: 'M',
      mobile: '+91 932*******',
      whatsapp: '+91 932*******',
      email: 'Pin***@gmail.com',
      language: 'English',
      time: '10:00 AM IST',
      status: 'Completed',
    },
    {
      id: 'T1234',
      name: 'Pintu Pal',
      gender: 'M',
      mobile: '+91 932*******',
      whatsapp: '+91 932*******',
      email: 'Pin***@gmail.com',
      language: 'English',
      time: '10:00 AM IST',
      status: 'Rescheduled',
    },
    {
      id: 'T1234',
      name: 'Pintu Pal',
      gender: 'M',
      mobile: '+91 932*******',
      whatsapp: '+91 932*******',
      email: 'Pin***@gmail.com',
      language: 'English',
      time: '10:00 AM IST',
      status: 'Completed',
    },
    {
      id: 'T1234',
      name: 'Pintu Pal',
      gender: 'M',
      mobile: '+91 932*******',
      whatsapp: '+91 932*******',
      email: 'Pin***@gmail.com',
      language: 'English',
      time: '10:00 AM IST',
      status: 'Rescheduled',
    },
    {
      id: 'T1234',
      name: 'Pintu Pal',
      gender: 'M',
      mobile: '+91 932*******',
      whatsapp: '+91 932*******',
      email: 'Pin***@gmail.com',
      language: 'English',
      time: '10:00 AM IST',
      status: 'Pending',
    },
    {
      id: 'T1234',
      name: 'Pintu Pal',
      gender: 'M',
      mobile: '+91 932*******',
      whatsapp: '+91 932*******',
      email: 'Pin***@gmail.com',
      language: 'English',
      time: '10:00 AM IST',
      status: 'Completed',
    },
    {
      id: 'T1234',
      name: 'Pintu Pal',
      gender: 'M',
      mobile: '+91 932*******',
      whatsapp: '+91 932*******',
      email: 'Pin***@gmail.com',
      language: 'English',
      time: '10:00 AM IST',
      status: 'Completed',
    },
    {
      id: 'T1234',
      name: 'Pintu Pal',
      gender: 'M',
      mobile: '+91 932*******',
      whatsapp: '+91 932*******',
      email: 'Pin***@gmail.com',
      language: 'English',
      time: '10:00 AM IST',
      status: 'Completed',
    },
  ];

  ngOnInit() {
    this.totalPages = Math.ceil(this.tasks.length / this.itemsPerPage);
    this.updatePaginatedTasks();
  }

  updatePaginatedTasks() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedTasks = this.tasks.slice(
      startIndex,
      startIndex + this.itemsPerPage
    );
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updatePaginatedTasks();
  }

  onSearchChange(searchText: string) {
    this.currentPage = 1;
    if (!searchText) {
      this.filteredTasks = [...this.tasks];
    } else {
      const lowerSearch = searchText.toLowerCase();
      this.filteredTasks = this.tasks.filter(
        (task) =>
          task.name.toLowerCase().includes(lowerSearch) ||
          task.email.toLowerCase().includes(lowerSearch) ||
          task.mobile.toLowerCase().includes(lowerSearch) ||
          task.status.toLowerCase().includes(lowerSearch)
      );
    }
    this.totalPages = Math.ceil(this.filteredTasks.length / this.itemsPerPage);
    this.updatePaginatedTasks();
  }

  onFilterClick() {
    console.log('Filter clicked');
  }

  onDocumentsClick() {
    console.log('Documents clicked');
  }

  onAddClick() {
    console.log('Add clicked');
  }
}
