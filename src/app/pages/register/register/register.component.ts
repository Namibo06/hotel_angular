import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { ApiUserService } from '../../../service/api-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','./register.responsive.component.css']
})
export class RegisterComponent {
  /*atributos*/
  password:string='';
  confirm_password:string='';
  email:string='';
  phone:string='';
  first_name:string='';
  last_name:string='';
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
    private service:ApiUserService
  ){

  }

  cadastrar(){
    if(this.password !== this.confirm_password){
      this.callbackError=true;
      this.messageError="Senhas não batem";
      this.password="";
      this.confirm_password="";

      setTimeout(()=>{
        this.callbackError=false;
      },5000);
    }else{
      this.service.register(this.first_name,this.last_name,this.email,this.phone,this.password).subscribe({
        next:(res)=>{
          console.log(res);
          this.messageSucess=res.message;
          this.callbackSucess=true;

          setTimeout(()=>{
            this.callbackSucess=false;
            window.location.href='/iniciar-sessao';
          },5000);
        },
        error:(err)=>{
          console.log(err);
        }
      });
    }
  }

}
