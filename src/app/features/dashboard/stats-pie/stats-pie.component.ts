import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-stats-pie',
  standalone: true,
  imports: [CommonModule, NgxEchartsModule],
  templateUrl: './stats-pie.component.html',
  styleUrls: ['./stats-pie.component.scss'],
})
export class StatsPieComponent {
  options = {
    color: ['#2ecc71', '#f1c40f', '#e74c3c', '#3498db'],
    tooltip: { trigger: 'item' },
    legend: {
      bottom: 0,
      left: 'center',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: { fontSize: 10 },
    },
    title: {
      text: '250',
      subtext: 'Total',
      left: 'center',
      top: 'center',
      textStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
      },
      subtextStyle: {
        fontSize: 14,
        color: '#888',
      },
    },
    series: [
      {
        name: 'Tasks',
        type: 'pie',
        radius: ['60%', '80%'],
        avoidLabelOverlap: true,
        label: {
          show: true,
          position: 'outside',
          formatter: '{c}',
          fontSize: 12,
          fontWeight: 'bold',
        },
        labelLine: {
          length: 15,
          length2: 0,
        },
        data: [
          { value: 100, name: 'Completed' },
          { value: 60, name: 'WIP' },
          { value: 30, name: 'Pending' },
          { value: 60, name: 'Rescheduled' },
        ],
      },
    ],
  };
}
