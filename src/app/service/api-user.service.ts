import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { autentication } from '../models/autentication';
import { padrao } from '../models/padrao';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  urlAutenticar:string='http://localhost:8000/api/v1/users/autentication';

  constructor(
    private http:HttpClient
  ) { }


  login(email:string,password:string):Observable<autentication>{
    const body={
      'email':email,
      'password':password
    };

    return this.http.post<autentication>(this.urlAutenticar,body);
  }
}
