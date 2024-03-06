import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index/index.component';
import { LoginComponent } from './pages/login/login/login.component';
import { RegisterComponent } from './pages/register/register/register.component';
import { SuitesComponent } from './pages/suites/suites/suites.component';
import { SuiteComponent } from './pages/suite/suite/suite.component';
import { SobreComponent } from './pages/sobre/sobre/sobre.component';

const routes: Routes = [
  {
    path:'',
    component:IndexComponent
  },
  {
    path:'iniciar-sessao',
    component:LoginComponent
  },
  {
    path:'cadastro',
    component:RegisterComponent
  },
  {
    path:'suites',
    component:SuitesComponent,
  },
  {
    path:'suite/:id',
    component:SuiteComponent
  },
  {
    path:'sobre',
    component:SobreComponent
  },
  {
    path:'**',
    component:IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
