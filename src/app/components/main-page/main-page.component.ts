import { Component, OnInit } from '@angular/core';
import { IssueListService } from '../../services/issue-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  issueList = [];
  apiPage = 1; // Because github api is 1 index based
  currentPage = 0; // Because we want our app to be 0 index based
  start;
  end;
  state;
  sort;
  order;
  outOfIssues = false;

  constructor(private route: ActivatedRoute,
              private issueListService: IssueListService) {
    this.start = 0;
    this.end = 10;
    this.state = 'open';
    this.sort = 'created';
    this.order = 'desc';
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.apiPage = Number(routeParams.get('apiPage'));
    this.currentPage = Number(routeParams.get('appPage'));
    this.state = String(routeParams.get('state'));
    this.sort = String(routeParams.get('sort'));
    this.order = String(routeParams.get('order'));
    this.getMoreIssues();
  }

  getMoreIssues(recursive = 0): void {
    /*
    * If check exists in order to make sure we don't make unnecessary api calls when hitting next button
    * also allows us to use one method for retrieving initial issues, as well as next set of issues.
    * */
    if ((this.currentPage + 1) * 10 + 9 > this.issueList.length) {
      this.issueListService.getIssueList(this.apiPage++, this.state, this.sort, this.order).subscribe((data: any[]) => {
        for (const response of data) {
          if (!response.pull_request) {
            this.issueList.push(response);
          }
        }
        // If we don't have enough issues for at least the next page, keep going.
        if ((this.currentPage + 1) * 10 + 9 > this.issueList.length) {
          // We'll try 3 times, then give up
          if (recursive <= 2) {
            this.getMoreIssues(++recursive);
          } else {
            this.outOfIssues = true;
          }
        }
      });
    }
  }

  nextPage(): void {
    this.currentPage++;
    this.getMoreIssues();
    this.start += 10;
    this.end += 10;
  }

  previousPage(): void {
    this.currentPage--;
    this.start -= 10;
    this.end -= 10;
    this.outOfIssues = false;
  }

  selectChange($event): void {
    this.issueList = [];
    this.currentPage = 0;
    this.apiPage = 1;
    this.start = 0;
    this.end = 10;

    if ($event === 'closed' || $event === 'open' || $event === 'all') {
      this.state = $event;
    } else if ($event === 'asc' || $event === 'desc') {
      this.order = $event;
    } else {
      this.sort = $event;
    }

    this.getMoreIssues();
  }

}
