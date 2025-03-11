import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkiResortDetailComponent } from './ski-resort-detail/ski-resort-detail.component';

const routes: Routes = [
  { path: 'ski-resort-detail/:id', component: SkiResortDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
