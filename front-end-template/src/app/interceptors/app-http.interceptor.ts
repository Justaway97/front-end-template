import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(protected loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      headers: new HttpHeaders({ Authorization: 'test' }),
    });
    this.loadingService.onStart(request);
    return next.handle(request).pipe(
      finalize(() => {
        this.loadingService.onFinish(request);
      })
    );
  }
}
