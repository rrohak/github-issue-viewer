import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GlobalConstants } from '../constant/global.constants';

@Injectable({
  providedIn: 'root'
})
export class IssueDataService {

  constructor(private http: HttpClient) { }

  getIssue(issueNumber: number): any {
    return this.http.get(GlobalConstants.BASE_URL + '/' + issueNumber);
  }

  getIssueComments(issueNumber: number): any {
    return this.http.get(GlobalConstants.BASE_URL + '/' + issueNumber + '/' + 'comments');
  }
}
