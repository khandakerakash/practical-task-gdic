import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  constructor(
    private _router: Router,
    private _toastrService: ToastrService,
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      tap(
        succ => { },
        err => {
            if (err.status == 490) {
                this._toastrService.error(err.message, 'UnAutorized', { progressBar: true, closeButton: true });
                this._router.navigateByUrl('/dashboard');
            }else if (err.status == 401) {
                this._toastrService.error(err.message, 'Error', { progressBar: true, closeButton: true });
                localStorage.clear();
                this._router.navigateByUrl('/login');
            } else if (err.status == 403) {
                this._toastrService.error(err.message, 'Error', { progressBar: true, closeButton: true });
                localStorage.clear();
                this._router.navigateByUrl('/login');
            } else if (err.status == 422) {
                this._toastrService.error(err.message, 'Error', { progressBar: true, closeButton: true });
            } else if (err.status == 429) {
              this._toastrService.error(err.message, 'Error', { progressBar: true, closeButton: true });
            } else if (err.status == 426) {
                this._toastrService.error(err.message, 'Error', { progressBar: true, closeButton: true });
            } else if (err.status == 500) {
                this._toastrService.error(err.message, 'Error form Interseptor!', { progressBar: true, closeButton: true });
            } else if (err.name == 'HttpErrorResponse' && err.statusText == 'Unknown Error') {
                localStorage.clear();
                this._toastrService.error('Backend Application is not response!'
                    + err.message, err.statusText, { progressBar: true, closeButton: true });
            } else {
                this._toastrService.error(err.message, 'Error', { progressBar: true, closeButton: true });
            }

        }
      )
    );
  }
}
