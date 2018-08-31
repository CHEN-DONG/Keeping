import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home.component';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    HomeComponent,
  ],
})
export class AdminModule { }
