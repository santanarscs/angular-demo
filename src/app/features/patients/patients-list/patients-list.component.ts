import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/shared/utils/animations/fade-in';

@Component({
  selector: 'slx-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss'],
  animations: [fadeIn]
})
export class PatientsListComponent implements OnInit {
  panelOpenState = false;
  constructor() {}

  ngOnInit(): void {}
}
