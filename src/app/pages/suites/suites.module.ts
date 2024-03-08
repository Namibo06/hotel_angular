import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuitesComponent } from './suites/suites.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderModule } from '../../shared/header/header.module';
import { FooterModule } from '../../shared/footer/footer.module';
import {register} from 'swiper/element/bundle';
register();

@NgModule({
  declarations: [
    SuitesComponent
  ],
  exports:[
    SuitesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule,
    HeaderModule,
    FooterModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SuitesModule { }
