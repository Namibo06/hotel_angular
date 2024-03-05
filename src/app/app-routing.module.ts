import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index/index.component';
import { LoginComponent } from './pages/login/login/login.component';
import { RegisterComponent } from './pages/register/register/register.component';
import { SuitesComponent } from './pages/suites/suites/suites.component';

const routes: Routes = [
  {
    path:'',
    component:IndexComponent
  },
  {
    path:'iniciar_sessao',
    component:LoginComponent
  },
  {
    path:'cadastro',
    component:RegisterComponent
  },
  {
    path:'suite/:id',
    component:SuitesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
