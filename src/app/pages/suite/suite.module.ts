import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiteComponent } from './suite/suite.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../shared/header/header.module';
import { FooterModule } from '../../shared/footer/footer.module';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask, provideNgxMask } from 'ngx-mask';
import { IConfig } from 'ngx-mask';

const maskConfig:Partial<IConfig>={
  validation:false,
};

@NgModule({
  declarations: [SuiteComponent],
  exports:[SuiteComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule,
    HeaderModule,
    FooterModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers:[
    provideEnvironmentNgxMask(maskConfig),
    provideNgxMask()
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SuiteModule { }
