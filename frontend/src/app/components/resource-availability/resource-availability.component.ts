import { Component } from '@angular/core';

@Component({
  selector: 'app-resource-availability',
  templateUrl: './resource-availability.component.html',
  styleUrls: ['./resource-availability.component.css']
})
export class ResourceAvailabilityComponent {
  // Sample data for resource availability tracking
  resources = [
    { name: 'Resource 1', available: true },
    { name: 'Resource 2', available: false },
    { name: 'Resource 3', available: true },
  ];

  constructor() {}

  // Method to check resource availability
  checkAvailability(resourceName: string): string {
    const resource = this.resources.find(r => r.name === resourceName);
    return resource ? (resource.available ? 'Available' : 'Not Available') : 'Resource not found';
  }
}