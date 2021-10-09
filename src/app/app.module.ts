import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TechBlogComponent } from "./tech-blog/tech-blog.component";
import { ScienceBlogComponent } from "./science-blog/science-blog.component";
import { BusinessBlogComponent } from "./business-blog/business-blog.component";
import { EntertainmentBlogComponent } from "./entertainment-blog/entertainment-blog.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DemoMaterialModule } from "./material.module";
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [
    AppComponent,
    TechBlogComponent,
    ScienceBlogComponent,
    BusinessBlogComponent,
    EntertainmentBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
