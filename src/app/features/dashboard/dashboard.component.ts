import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/shared/utils/animations/fade-in';

@Component({
  selector: 'slx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [fadeIn],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
