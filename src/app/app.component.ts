import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'walmartlab\\thorax issue viewer';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }
}
