import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspanolViewComponent } from './espanol-view/espanol-view.component';
import { EspanolComponent } from './espanol/espanol.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { InglesViewComponent } from './ingles-view/ingles-view.component';
import { InglesComponent } from './ingles/ingles.component';
import { LoginComponent } from './login/login.component';
import { DataResolver } from './resolvers/data.resolver';



const routes: Routes = [{
  path: '',
  component: HomeComponent, canActivate : [AuthGuard]
},
{
  path: 'espanol',
  component: EspanolComponent, canActivate : [AuthGuard]
},
{
  path: 'ingles',
  component: InglesComponent, canActivate : [AuthGuard]
},
{
  path: 'ingles/:palabra',
  component: InglesViewComponent, canActivate : [AuthGuard],
  resolve: {
    data: DataResolver
  }
},
{
  path: 'espanol/:palabra',
  component: EspanolViewComponent, canActivate : [AuthGuard]
},
{
   path: 'login', component: LoginComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
