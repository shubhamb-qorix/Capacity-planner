import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JiraService {

  private apiUrl = 'http://your-python-backend-api-endpoint'; // Replace with your Python API endpoint

  constructor(private http: HttpClient) { }

  getIssues(): Observable<any> {
    return this.http.get(`${this.apiUrl}/issues`);
  }

  createIssue(issueData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/issues`, issueData);
  }

  updateIssue(issueId: string, issueData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/issues/${issueId}`, issueData);
  }

  deleteIssue(issueId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/issues/${issueId}`);
  }
}