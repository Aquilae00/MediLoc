import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CovidCountryService {

  constructor(private http: HttpClient) { }

  collect(): Observable<any> {
    return this.http.get<any>("https://api.covid19uk.live/locations")
  }
}
