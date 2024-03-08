import { Component } from '@angular/core';
import { ApiHotelService } from '../../../service/api-hotel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suite',
  templateUrl: './suite.component.html',
  styleUrl: './suite.component.css'
})
export class SuiteComponent {
  id:number=0;
  name:string='';
  number:number=0;
  number_of_bedroom:number=0;
  number_of_bathroom:number=0;
  area:string='';
  price:string='';


  constructor(
    private service:ApiHotelService,
    private route:ActivatedRoute
  ){
    this.id=this.route.snapshot.params['id'];
    this.pegarSuite();
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
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
}
