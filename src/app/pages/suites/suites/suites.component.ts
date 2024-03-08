import { Component } from '@angular/core';
import { ApiHotelService } from '../../../service/api-hotel.service';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBath, faBed, faLayerGroup, faMoneyBill, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-suites',
  templateUrl: './suites.component.html',
  styleUrl: './suites.component.css'
})
export class SuitesComponent {
  suites:any=[];

  bedroom:IconDefinition=faBed;
  bathroom:IconDefinition=faBath;
  area:IconDefinition=faLayerGroup;
  price:IconDefinition=faMoneyBillWave;
  avaliable:string|null='';

  constructor(
    private service:ApiHotelService
  ){
    this.getAllSuites();
  }

  getAllSuites(){
    this.service.allSuites().subscribe({
      next:(res)=>{
        this.suites=res.suites;
        console.log(this.suites);
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
}
