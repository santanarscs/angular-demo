import { Component, Input, OnInit } from '@angular/core';
interface IMenu {
  text: string;
  icon?: string;
  routerLink?: string;
  children?: IMenu[];
}
@Component({
  selector: 'slx-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss']
})
export class SidenavItemComponent implements OnInit {
  @Input() menu!: IMenu;

  constructor() { }

  ngOnInit(): void {
  }

}
