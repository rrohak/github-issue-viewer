import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IssueDataService } from '../../services/issue-data.service';

@Component({
  selector: 'app-issue-page',
  templateUrl: './issue-page.component.html',
  styleUrls: ['./issue-page.component.scss']
})
export class IssuePageComponent implements OnInit {

  issueNumber: number;
  issue: any;
  comments: any[];

  constructor(private route: ActivatedRoute,
              private issueDataService: IssueDataService) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.issueNumber = Number(routeParams.get('issueNumber'));
    this.issueDataService.getIssue(this.issueNumber).subscribe((data: any) => {
      this.issue = data;
      console.log(this.issue.created_at);
    });
    this.issueDataService.getIssueComments(this.issueNumber).subscribe((data: any) => {
      this.comments = data;
    });
  }

  stateBackgroundColor(): string {
    if (this.issue.state === 'open') {
      return 'green';
    } else {
      return 'red';
    }
  }
}
