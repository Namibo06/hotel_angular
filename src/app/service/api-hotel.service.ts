import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { allSuites } from '../models/allSuites';

@Injectable({
  providedIn: 'root'
})
export class ApiHotelService {
  urlAllSuites:string='http://localhost:8000/api/v1/suites/allSuites';
  urlSuite:string='http://localhost:8000/api/v1/suites/suite';
  urlMarcarHorario:string='http://localhost:8000/api/v1/hotel/make_an_appointment';


  constructor(
    private http:HttpClient
  ) { }

  allSuites():Observable<allSuites>{
    return this.http.get<allSuites>(this.urlAllSuites);
  }

  suite(id:number):Observable<allSuites>{
    return this.http.get<allSuites>(this.urlSuite+'/'+id);
  }

  marcarHorario(token:string,date_of:string,hour_minute_of:string,date_to:string,hour_minute_to:string,suites_id:number,users_id:string){
    const body={
      'date_of':date_of,
      'hour_minute_of':hour_minute_of,
      'date_to':date_to,
      'hour_minute_to':hour_minute_to,
      'suites_id':suites_id,
      'users_id':users_id
    };

    const httpOptions={
      headers: new HttpHeaders({
        'Authorization':'bearer'+token
      })
    };

    return this.http.post(this.urlMarcarHorario,body,httpOptions);
  }
}
