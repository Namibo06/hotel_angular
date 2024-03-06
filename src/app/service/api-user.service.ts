import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { autentication } from '../models/autentication';
import { cadastro } from '../models/cadastro';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  urlAutenticar:string='http://localhost:8000/api/v1/users/autentication';
  urlCadastrar:string='http://localhost:8000/api/v1/users/sign_up';

  constructor(
    private http:HttpClient
  ) { }

  register(first_name:string,last_name:string,email:string,phone:string,password:string):Observable<cadastro>{
    const body={
      'first_name':first_name,
      'last_name':last_name,
      'email':email,
      'phone':phone,
      'password':password
    };

    return this.http.post<cadastro>(this.urlCadastrar,body);
  }

  login(email:string,password:string):Observable<autentication>{
    const body={
      'email':email,
      'password':password
    };

    return this.http.post<autentication>(this.urlAutenticar,body);
  }
}
