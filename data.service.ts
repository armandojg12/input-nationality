import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export interface Country {
    idPais: number;
pais: string;
idIdioma: number;
codigoPais: string;
codigoTelefono: number;
}

@Injectable({
    providedIn: 'root'
})
export class DataService {
  private countriesSource = new BehaviorSubject<Country[]>([]);
  public countries$ = this.countriesSource.asObservable();
    constructor(private http: HttpClient) { }

    getCountries() {
      this.http.get<any>(`http://52.67.12.114/motor.canal/api/Canal/Pais/Pais=opera`).pipe(map(rsp => rsp.items)).subscribe( 
        data => {
          console.log(data);
        },
        error => {}
        );
    }
}
