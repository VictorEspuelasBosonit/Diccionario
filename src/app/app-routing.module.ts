import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspanolViewComponent } from './espanol-view/espanol-view.component';
import { EspanolComponent } from './espanol/espanol.component';
import { HomeComponent } from './home/home.component';
import { InglesViewComponent } from './ingles-view/ingles-view.component';
import { InglesComponent } from './ingles/ingles.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'espanol',
  component: EspanolComponent
},
{
  path: 'ingles',
  component: InglesComponent
},
{
  path: 'ingles/:palabra',
  component: InglesViewComponent
},
{
  path: 'espanol/:palabra',
  component: EspanolViewComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
