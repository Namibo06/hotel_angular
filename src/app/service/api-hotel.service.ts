import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { allSuites } from '../models/allSuites';

@Injectable({
  providedIn: 'root'
})
export class ApiHotelService {
  urlAllSuites:string='http://localhost:8000/api/v1/suites/allSuites';
  urlSuite:string='http://localhost:8000/api/v1/suites/suite';


  constructor(
    private http:HttpClient
  ) { }

  allSuites():Observable<allSuites>{
    return this.http.get<allSuites>(this.urlAllSuites);
  }

  suite(id:number):Observable<allSuites>{
    return this.http.get<allSuites>(this.urlSuite+'/'+id);
  }
}
