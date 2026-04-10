import { Component } from '@angular/core';

@Component({
  selector: 'app-team-priority',
  templateUrl: './team-priority.component.html',
  styleUrls: ['./team-priority.component.css']
})
export class TeamPriorityComponent {
  teams: { name: string; priority: number }[] = [];

  constructor() {
    // Initialize teams with some sample data
    this.teams = [
      { name: 'Team A', priority: 1 },
      { name: 'Team B', priority: 2 },
      { name: 'Team C', priority: 3 }
    ];
  }

  setPriority(teamName: string, priority: number) {
    const team = this.teams.find(t => t.name === teamName);
    if (team) {
      team.priority = priority;
    }
  }
}