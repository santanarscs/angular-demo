import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  state('*', style({ opacity: 1, transform: 'translateY(0)' })),
  transition(':enter', [style({ opacity: 0, transform: 'translateY(30%)' }), animate('200ms ease-in-out')]),
]);
