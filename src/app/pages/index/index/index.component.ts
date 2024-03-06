import { Component } from '@angular/core';
import { Icon, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons';
import { faBacon, faBicycle, faChevronDown, faCoffee, faDog, faHouse, faParking, faSquareParking, faStar, faThumbtack, faUtensils, faWifi, faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  chevronDown:IconDefinition=faChevronDown;
  wifi:IconDefinition=faWifi;
  parking:IconDefinition=faParking;
  bike:IconDefinition=faBicycle;
  pet:IconDefinition=faDog;
  breakfeast:IconDefinition=faBacon;
  coffee:IconDefinition=faCoffee;
  wind:IconDefinition=faWind;
  house:IconDefinition=faHouse;
  utensils:IconDefinition=faUtensils;
  acessibility:IconDefinition=faAccessibleIcon;
  star:IconDefinition=faStar;
  thumbtack:IconDefinition=faThumbtack;

  down(){
    const el =document.getElementById('welcome_more');
    el?.scrollIntoView({behavior:'smooth'});
  }

  depoiments(){
    const depoiments = document.getElementById('depoiments');
    depoiments?.scrollIntoView({behavior:'smooth'});
  }

  accommodation(){
    const accommodation = document.getElementById('accommodation');
    accommodation?.scrollIntoView({behavior:'smooth'});
  }
}
