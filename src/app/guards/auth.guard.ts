import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ScorerService } from '../services/scorer.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private Scorer: ScorerService, private router: Router) {}

  canActivate(): boolean {
    if (this.Scorer.loggedIn()) return true;
    else this.router.navigate(['/']);
    return false;
  }
}
