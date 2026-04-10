import { Component } from '@angular/core';

@Component({
  selector: 'app-capacity-vs-committed',
  templateUrl: './capacity-vs-committed.component.html',
  styleUrls: ['./capacity-vs-committed.component.css']
})
export class CapacityVsCommittedComponent {
  capacity: number = 0;
  committed: number = 0;

  constructor() { }

  compare() {
    if (this.capacity >= this.committed) {
      return 'Capacity is sufficient';
    } else {
      return 'Capacity is insufficient';
    }
  }
}