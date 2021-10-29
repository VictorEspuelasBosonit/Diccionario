import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router'
import { of, Observable } from 'rxjs';

@Injectable({

    providedIn: 'root'
})

export class DataResolver implements Resolve<Observable<any>>{
    resolve(){
        return of('Hola');
    }
}