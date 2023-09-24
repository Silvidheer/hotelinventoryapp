import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot, mapToCanDeactivate } from '@angular/router';
import { BookingComponent } from '../booking.component';

export const bookingGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};


