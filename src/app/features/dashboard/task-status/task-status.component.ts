import { Component } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-status',
  standalone: true,
  imports: [NgxEchartsDirective, FormsModule],
  providers: [provideEchartsCore({ echarts })],
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.scss'],
})
export class TaskStatusComponent {
  selectedRange: string = 'day';
  currentDate: string = '06-06-2024';

  chartOptions = {
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    legend: { show: false },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['Campaigns', 'Opportunities', 'Missed Call'],
    },
    yAxis: { type: 'value' },
    series: [
      {
        name: 'Open',
        type: 'bar',
        stack: 'total',
        label: { show: true, position: 'inside' },
        data: [10, 30, 30],
        itemStyle: { color: '#DB4453', borderRadius: [4, 4, 0, 0] },
        barWidth: '70%',
      },
      {
        name: 'Closed',
        type: 'bar',
        stack: 'total',
        label: { show: true, position: 'top' },
        data: [90, 70, 70],
        itemStyle: { color: '#EAEAEA', borderRadius: [4, 4, 0, 0] },
        barWidth: '70%',
      },
    ],
  };

  onRangeChange() {
    console.log('Range changed to', this.selectedRange);
  }

  prevDate() {
    console.log('Previous date clicked');
  }

  nextDate() {
    console.log('Next date clicked');
  }
}
