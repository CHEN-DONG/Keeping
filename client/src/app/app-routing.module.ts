import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BlogComponent } from "./blog/blog.component";
import { AdminComponent } from "./admin/admin.component";

const routes: Routes = [
  {
    path: "blog",
    loadChildren: "./blog/blog.module#BlogModule"
  },
  {
    path: "admin",
    loadChildren: "./admin/admin.module#AdminModule"
  },
  { path: "", redirectTo: "/blog", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
