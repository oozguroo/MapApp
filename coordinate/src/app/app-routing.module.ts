import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointsComponent } from './points/points.component';


const routes: Routes = [
  {path: 'points',component:PointsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
