import { animate, state, style, transition, trigger } from "@angular/animations";

export const fadeIn = trigger('fadeIn', [
  state('*', style({opacity: 1})),
  transition(":enter", [
    style({opacity: 0}),
    animate( '200ms ease-in-out')
  ])
])