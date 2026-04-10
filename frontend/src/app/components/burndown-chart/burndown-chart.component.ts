import { Component } from '@angular/core';

@Component({
  selector: 'app-burndown-chart',
  templateUrl: './burndown-chart.component.html',
  styleUrls: ['./burndown-chart.component.css']
})
export class BurndownChartComponent {
  // Sample data for the burndown chart
  public data = [
    { day: '2026-04-01', remainingWork: 100 },
    { day: '2026-04-02', remainingWork: 80 },
    { day: '2026-04-03', remainingWork: 60 },
    { day: '2026-04-04', remainingWork: 40 },
    { day: '2026-04-05', remainingWork: 20 },
    { day: '2026-04-06', remainingWork: 0 },
  ];

  // Method to get the remaining work for a specific day
  getRemainingWork(day: string): number {
    const dayData = this.data.find(d => d.day === day);
    return dayData ? dayData.remainingWork : 0;
  }
}