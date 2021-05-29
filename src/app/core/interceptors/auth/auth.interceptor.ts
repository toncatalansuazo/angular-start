import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // todo get access token from store if you use ngrx or from custom service
  private access_token: string = ''

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if (!req.headers.has('Content-Type')) {
        req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }
    if (this.access_token) {
        req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + this.access_token) });
    }
    
    return next.handle(req);
  }
}
