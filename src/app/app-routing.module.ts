import { ScienceBlogComponent } from "./science-blog/science-blog.component";
import { EntertainmentBlogComponent } from "./entertainment-blog/entertainment-blog.component";
import { BusinessBlogComponent } from "./business-blog/business-blog.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TechBlogComponent } from "./tech-blog/tech-blog.component";

const routes: Routes = [
  {
    path: "tech",
    component: TechBlogComponent
  },
  {
    path: "business",
    component: BusinessBlogComponent
  },
  {
    path: "entertainment",
    component: EntertainmentBlogComponent
  },
  {
    path: "science",
    component: ScienceBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
