import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SigninService } from '../services/signin';

export const activateGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const signinService = inject(SigninService);

  if (signinService.isUserLogged()) {
    return true;
  } else {
    router.navigateByUrl('/sign-in');
    return false;
  }
};
