import { Component } from '@angular/core';

@Component({
  selector: 'app-sprint-velocity',
  templateUrl: './sprint-velocity.component.html',
  styleUrls: ['./sprint-velocity.component.css']
})
export class SprintVelocityComponent {
  // Sample data for sprint velocities
  sprintData = [
    { sprint: 'Sprint 1', velocity: 20 },
    { sprint: 'Sprint 2', velocity: 25 },
    { sprint: 'Sprint 3', velocity: 15 }
  ];

  // Calculate total velocity
  getTotalVelocity() {
    return this.sprintData.reduce((total, sprint) => total + sprint.velocity, 0);
  }
}