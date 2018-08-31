import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: './blog/blog.module#BlogModule'
  // },
  // {
  //   path: 'admin',
  //   component: AdminComponent,
  //   loadChildren: './admin/admin.module#AdminModule'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
