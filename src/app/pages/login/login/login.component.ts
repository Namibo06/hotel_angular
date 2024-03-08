import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { ApiUserService } from '../../../service/api-user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css','./login.responsive.component.css']
})
export class LoginComponent {
  /*atributos*/
  password:string='';
  email:string='';
  phone:string='';
  first_name:string='';
  last_name:string='';
  token:string='';
  status:number=0;
  id:number=0;

  /**icons */
  google:IconDefinition=faGoogle;

  /**callback's */
  callbackError:boolean=false;
  callbackSucess:boolean=false;
  messageError:string='';
  messageSucess:string='';

  constructor(
    private cookie:CookieService,
    private service:ApiUserService
  ){

  }

  autenticar(){
    this.service.login(this.email,this.password).subscribe({
      next:(res)=>{
        console.log(res);
        this.first_name=res.user.first_name;
        this.last_name=res.user.last_name;
        this.email=res.user.email;
        this.phone=res.user.phone;
        this.token=res.token;
        this.status=res.status;
        this.id=res.user.id;

        if(this.status===200){
          this.cookie.set('token',this.token,3);
          this.cookie.set('email',this.email,3);
          this.cookie.set('first_name',this.first_name,3);
          this.cookie.set('id',this.id.toString(),3);
          this.callbackSucess=true;
          this.messageSucess=res.message;
          setTimeout(()=>{
            this.callbackSucess=false;
            window.location.href='/index';
          },3000);
        }
      },
      error:(err)=>{
        console.log(err);

        this.callbackError=true;
        this.messageError="Email/Senha inválidos";
        setTimeout(()=>{
          this.callbackError=false
        },3000);
      }
    });
  }
}
