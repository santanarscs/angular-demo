import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'slx-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  public isScreenSmall = false;
  public showIndicatorSubject = new BehaviorSubject<boolean>(false);
  showIndicatorAction$ = this.showIndicatorSubject.asObservable();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
      });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.showIndicatorSubject.next(true);
      }
      if (event instanceof NavigationEnd) {
        this.showIndicatorSubject.next(false)
      }
    });
  }
}
