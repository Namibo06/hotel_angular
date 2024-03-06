import { Component,EventEmitter,Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  facebook:IconDefinition=faFacebook;
  twitter:IconDefinition=faTwitter;
  instagram:IconDefinition=faInstagram;

  @Output() enviarDadosDepoiments = new EventEmitter<any>();
  @Output() enviarDadosAccommodation = new EventEmitter<any>();

  depoiments(){
    //const depoiments = document.getElementById('depoiments');
    //depoiments?.scrollIntoView({behavior:'smooth'});
    this.enviarDadosDepoiments.emit(null);
  }

  accommodation(){
    //const location = document.getElementById('location');
    //location?.scrollIntoView({behavior:'smooth'});
    this.enviarDadosAccommodation.emit(null);
  }
}
