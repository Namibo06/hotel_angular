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
  password:string|undefined='';
  email:string|undefined='';
  phone:string|undefined='';
  first_name:string|undefined='';
  last_name:string|undefined='';
  token:string='';
  status:number=0;

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
        this.first_name=res.user?.first_name;
        this.last_name=res.user?.last_name;
        this.email=res.user?.email;
        this.phone=res.user?.phone;
        this.token=res.token;
        this.status=res.status;

        if(this.status===200){
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
