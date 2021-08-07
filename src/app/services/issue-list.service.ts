import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GlobalConstants } from '../constant/global.constants';

@Injectable({
  providedIn: 'root'
})
export class IssueListService {

  constructor(private http: HttpClient) {
  }

  /**
   * Returns 20 issues of the page requested
   * @param pageNumber given page number to return
   * @param state open, closed, all
   * @param sort created date, last updated date, number of comments
   * @param direction ascending (asc) least recent/smallest number first,
   * descending (desc) most recent/largest number first
   */
  getIssueList(pageNumber: number, state = 'open', sort = 'created', direction = 'asc'): any {
    const httpParams = new HttpParams()
      .set('page', pageNumber.toString(10))
      .set('per_page', '10')
      .set('state', state)
      .set('sort', sort)
      .set('direction', direction);
    return this.http.get(GlobalConstants.BASE_URL, {params: httpParams});
  }
}
