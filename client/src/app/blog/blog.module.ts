import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FrontendComponent } from './pages/frontend/frontend.component';
import { BackendComponent } from './pages/backend/backend.component';
import { OthersComponent } from './pages/others/others.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BlogComponent } from './blog.component';
import { MainHeaderComponent } from '../common/components/main-header/main-header.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    NgZorroAntdModule,
  ],
  declarations: [
    BlogComponent,
    HomeComponent,
    FrontendComponent,
    BackendComponent,
    OthersComponent,
    MainHeaderComponent
  ],
})
export class BlogModule { }

