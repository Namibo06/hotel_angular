import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiteComponent } from './suite/suite.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../shared/header/header.module';
import { FooterModule } from '../../shared/footer/footer.module';



@NgModule({
  declarations: [SuiteComponent],
  exports:[SuiteComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule,
    HeaderModule,
    FooterModule
  ]
})
export class SuiteModule { }
