import { Component } from '@angular/core';
import { ApiHotelService } from '../../../service/api-hotel.service';
import { ActivatedRoute } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBath, faBed, faLayerGroup, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-suite',
  templateUrl: './suite.component.html',
  styleUrl: './suite.component.css',
})
export class SuiteComponent {

  /**atributos suite */
  id:number=0;
  name:string='';
  number:number=0;
  number_of_bedroom:number=0;
  number_of_bathroom:number=0;
  area:string='';
  price:string='';
  avaliable:string|null='';

  /**icons */
  bedroomIcon:IconDefinition=faBed;
  bathroomIcon:IconDefinition=faBath;
  areaIcon:IconDefinition=faLayerGroup;
  priceIcon:IconDefinition=faMoneyBillWave;

  /**atributos hotel */
  date_of:string='';
  hour_minute_of:string='';
  date_to:string='';
  hour_minute_to:string='';
  suites_id:number=0;
  users_id:string='';
  token:string='';

  /**callback's */
  callbackError:boolean=false;
  messageError:string='';
  callbackSucess:boolean=false;
  messageSucess:string='';

  constructor(
    private service:ApiHotelService,
    private route:ActivatedRoute,
    private cookies:CookieService
  ){
    this.id=this.route.snapshot.params['id'];
    this.suites_id=this.route.snapshot.params['id'];
    this.pegarSuite();
    this.getCookies();
  }

  getCookies(){
    this.users_id=this.cookies.get('id');
    this.token=this.cookies.get('token');
  }

  pegarSuite(){
    this.service.suite(this.id).subscribe({
      next:(res)=>{
        console.log(res);
        this.name=res.suites[0].name;
        this.number=res.suites[0].number;
        this.number_of_bedroom=res.suites[0].number_of_bedroom;
        this.number_of_bathroom=res.suites[0].number_of_bathroom;
        this.area=res.suites[0].area;
        this.price=res.suites[0].price;
        this.avaliable=res.suites[0].avaliable;

        if(this.avaliable === "sim"){
          window.location.href='/suites';
        }
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

  downFormulario(){
    const formulario = document.getElementById('formulario');
    formulario?.scrollIntoView({behavior:"smooth"});
  }

  marcar(){
    if(this.date_of < "08/03/2024"){
      this.callbackError=true;
      this.messageError="Data de Entrada inválida";

      setTimeout(()=>{
        this.callbackError=false;

        window.location.href='/suite/'+this.id;
      },3000);
    }

    if(this.date_to > "31/12/2025"){
      this.callbackError=true;
      this.messageError="Data de Saída inválida";

      setTimeout(()=>{
        this.callbackError=false;

        window.location.href='/suite/'+this.id;
      },3000);
    }

    this.service.marcarHorario(this.token,this.date_of,this.hour_minute_of,this.date_to,this.hour_minute_to,this.suites_id,this.users_id).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
}
