import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FrontendComponent } from './pages/frontend/frontend.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'frontend', component: FrontendComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
