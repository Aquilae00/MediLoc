import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * @author: Brian Linaldi
 */
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = "https://mediloc.herokuapp.com";
  constructor(private http: HttpClient) { }

  // addVillage(count:number, latitude: number, longitude:number): Observable<any> {
  //   return this.http.post<any>('http://127.0.0.1:5000/village', {
  //     'count': count,
  //     'latitude': latitude,
  //     'longitude': longitude,
  //     'color_id': 0 
  //   });
  // }

  // getVillages(): Observable<any> {
  //   return this.http.get<any>('http://127.0.0.1:5000/village');
  // }

  // run(centerNum: number, worker_num:number): Observable<any> {
  //   return this.http.post<any>('http://127.0.0.1:5000/run', {
  //     "center_num": centerNum,
  //     "worker_num": worker_num
  //   })
  // }

  // get_centers(): Observable<any> {
  //   return this.http.get<any>('http://127.0.0.1:5000/get_center');
  // }

  run2(longitudes, latitudes,populations, center_num: number, worker_num: number ): Observable<any> {
    const object = {
      'longitudes': longitudes,
      'latitudes': latitudes,
      'populations':populations,
      'center_num': center_num,
      'worker_num': worker_num
    }
    // console.log(object);
    // console.log(this.baseUrl+"/run2");
    return this.http.post<any>(this.baseUrl+"/run2", object)
  }
}
