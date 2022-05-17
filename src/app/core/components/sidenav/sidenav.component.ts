import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

interface IMenu {
  text: string;
  icon?: string;
  routerLink?: string;
  children?: IMenu[];
}

@Component({
  selector: 'slx-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  menuList!: Observable<IMenu[]>;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.menuList = this.http.get<IMenu[]>('/assets/menu.json');
  }
}
