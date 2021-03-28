import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { ScorerService } from './scorer.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(req, next) {
    let scorerService = this.injector.get(ScorerService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${scorerService.getToken()}`,
      },
    });
    return next.handle(tokenizedReq);
  }
}
