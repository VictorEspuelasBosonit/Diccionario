import { HttpClient, HttpHandler } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkService {


  constructor(
    private http: HttpClient,
  ) {

  }

  public insert(palabra: string, desc: string) {
    return this.http.post('http://localhost:8080/espanol/', {
      "palabra": palabra,
      "descripcion": desc
    })
  }

  public delete(palabra: string) {
    return this.http.delete('http://localhost:8080/espanol/' + palabra)
  }

  public update(palabra: string, desc: string, palabraAntigua2: string): Observable<any> {
    return this.http.put('http://localhost:8080/espanol/' + palabraAntigua2, {
      "palabra": palabra,
      "descripcion": desc
    })
  }

  public getData() {
    return this.http.get("http://localhost:8080/espanol/")
  }

  public insertIngles(palabra: string, palabraEspanol: string) {
    return this.http.post('http://localhost:8080/ingles/', {
      "palabra": palabra,
      "palabraEspanol": palabraEspanol
    })
  }

  public deleteIngles(palabra: string) {
    return this.http.delete('http://localhost:8080/ingles/' + palabra)
  }

  public updateIngles(palabra: string, palabraEspanol: string, palabraAntigua: string): Observable<any> {
    return this.http.put('http://localhost:8080/ingles/' + palabraAntigua, {
      "palabra": palabra,
      "palabraEspanol": palabraEspanol
    })
  }

  public getDataIngles() {
    console.log("servicio")

   return this.http.get("http://localhost:8080/ingles/")
  }

  public getObjectViewEspanol(palabra: string){
   return this.http.get("http://localhost:8080/espanol/"+ palabra)
  }

  public getObjectViewIngles(palabra: string){
    return this.http.get("http://localhost:8080/ingles/"+ palabra)
   }
}