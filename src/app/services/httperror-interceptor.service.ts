import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from 'rxjs/operators'


@Injectable({
    providedIn: 'root'
})

export class HttpErrorInterceptorService implements HttpInterceptor{
    intercept(request: HttpRequest<any>, next: HttpHandler){
        console.log('Http Request started');
        return next.handle(request)
        .pipe(
            catchError((error: HttpErrorResponse)=>{
                console.log(error);
                return throwError(error.error);
            })
        )
    }
}