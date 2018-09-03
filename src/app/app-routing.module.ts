import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "competitive", component: HomeComponent},
  {path: "dashboard", component: HomeComponent},
  {path: "qms", component: HomeComponent},
  {path: "favorites", component: HomeComponent},
  {path: "charts_url", component: HomeComponent},
  {path: "search", component: HomeComponent},
  {path: "gallery", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
