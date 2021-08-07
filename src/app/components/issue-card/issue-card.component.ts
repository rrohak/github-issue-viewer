import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.scss']
})
export class IssueCardComponent implements OnInit {

  @Input() issue;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateToIssue(): void {
    this.router.navigateByUrl('/issue/' + this.issue.number);
  }

  stateBackgroundColor(): string {
    if (this.issue.state === 'open') {
      return 'green';
    } else {
      return 'red';
    }
  }
}
