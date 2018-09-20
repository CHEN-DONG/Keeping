import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { FrontendComponent } from "./pages/frontend/frontend.component";
import { BackendComponent } from "./pages/backend/backend.component";
import { OthersComponent } from "./pages/others/others.component";
import { BlogComponent } from "./blog.component";

const routes: Routes = [
  {
    path: "",
    component: BlogComponent,
    children: [
      {
        path: "latest",
        component: HomeComponent
      },
      {
        path: "frontend",
        component: FrontendComponent
      },
      {
        path: "backend",
        component: BackendComponent
      },
      {
        path: "others",
        component: OthersComponent
      },
      {
        path: "",
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
