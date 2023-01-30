import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse,
  HttpEventType,
} from '@angular/common/http';
import { finalize, map, Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';
import jwt_decode from 'jwt-decode';
import { AppService } from '../services/app.service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(
    protected loadingService: LoadingService,
    protected appService: AppService
  ) {}

  private authorization: any;

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.authorization) {
      request = request.clone({
        headers: new HttpHeaders({ Authorization: this.authorization }),
      });
    }
    this.loadingService.onStart(request);
    return next.handle(request).pipe(
      map((event: any) => {
        if (event instanceof HttpResponse) {
          if (event.headers.get('Authorization')) {
            this.authorization = event.headers.get('Authorization');
            this.appService.setUser(
              (jwt_decode(this.authorization) as any).username
            );
          }
        }
        return event;
      }),
      finalize(() => {
        this.loadingService.onFinish(request);
      })
    );
  }
}
