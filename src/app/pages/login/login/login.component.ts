import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css','./login.responsive.component.css']
})
export class LoginComponent {
  password:string='';
  email:string='';

  google:IconDefinition=faGoogle;

  /**callback's */
  callbackError:boolean=false;
  callbackSucess:boolean=false;
  messageError:string='';
  messageSucess:string='';

  constructor(){

  }

  autenticar(){
    
  }
}
