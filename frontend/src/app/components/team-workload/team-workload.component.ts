import { Component } from '@angular/core';

@Component({
  selector: 'app-team-workload',
  templateUrl: './team-workload.component.html',
  styleUrls: ['./team-workload.component.css']
})
export class TeamWorkloadComponent {
  teamMembers = [
    { name: 'Alice', workload: 25 },
    { name: 'Bob', workload: 30 },
    { name: 'Charlie', workload: 20 },
    { name: 'Diana', workload: 25 }
  ];

  get totalWorkload() {
    return this.teamMembers.reduce((total, member) => total + member.workload, 0);
  }

  get workloadDistribution() {
    return this.teamMembers.map(member => ({
      ...member,
      percentage: (member.workload / this.totalWorkload) * 100
    }));
  }
}