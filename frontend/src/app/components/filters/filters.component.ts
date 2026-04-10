import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  template: `
    <div class="filters">
      <h2>Filters</h2>
      <div>
        <label for="sprint-status">Sprint Status:</label>
        <select id="sprint-status">
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div>
        <label for="team">Team:</label>
        <select id="team">
          <option value="All">All</option>
          <option value="Team A">Team A</option>
          <option value="Team B">Team B</option>
        </select>
      </div>
      <div>
        <label for="issue-type">Issue Type:</label>
        <select id="issue-type">
          <option value="All">All</option>
          <option value="Bug">Bug</option>
          <option value="Feature">Feature</option>
          <option value="Task">Task</option>
        </select>
      </div>
      <div>
        <label for="custom-field">Custom Field:</label>
        <input id="custom-field" type="text" placeholder="Enter custom field" />
      </div>
    </div>
  `,
  styles: [`.filters { margin: 20px; }`]
})
export class FiltersComponent {}
