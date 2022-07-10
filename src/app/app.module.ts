import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
// import { NgCircleProgressModule } from 'ng-circle-progress';

import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { StudentComponent } from './student/student.component';
import { AdmincontentComponent } from './admin/admincontent/admincontent.component';
import { AdminComponent } from './admin/admin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeropageComponent } from './heropage/heropage.component';
import { SidebarComponent } from './homepage/sidebar/sidebar.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { ContentComponent } from './homepage/content/content.component';
import { HeronavbarComponent } from './heropage/heronavbar/heronavbar.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { UsersComponent } from './admin/users/users.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';
import { StaffPageComponent } from './staff-page/staff-page.component';
import { CategoryComponent } from './category/category.component';
import { StaffPostComponent } from './staff-post/staff-post.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { StaffContentFormComponent } from './staff-content-form/staff-content-form.component';
import { FooterComponent } from './footer/footer.component';
import { EditStaffprofileComponent } from './edit-staffprofile/edit-staffprofile.component';
import { StdProfileComponent } from './student/std-profile/std-profile.component';
import { StdPostFormComponent } from './student/std-post/std-post-form/std-post-form.component';
import { StdPostComponent } from './student/std-post/std-post.component';
import { PanelComponent } from './student/panel/panel.component';
import { CategoriesComponent } from './student/panel/categories/categories.component';
import { StdSuggestionComponent } from './student/panel/std-suggestion/std-suggestion.component';
import { StdNavComponent } from './student/std-nav/std-nav.component';
import { EditStaffPostComponent } from './edit-staff-post/edit-staff-post.component';

import { ErrorInterceptor, JwtInterceptor } from './_helpers';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    StudentComponent,
    StdProfileComponent,
    StdPostFormComponent,
    StdPostComponent,
    PanelComponent,
    CategoriesComponent,
    StdSuggestionComponent,
    routingComponents,
    AdminComponent,
    HomepageComponent,
    HeropageComponent,
    SidebarComponent,
    NavbarComponent,
    ContentComponent,
    HeronavbarComponent,
    EditprofileComponent,
    ReportsComponent,
    AdmincontentComponent,
    UsersComponent,
    SinglePostComponent,
    StaffProfileComponent,
    StaffPageComponent,
    CategoryComponent,
    StaffPostComponent,
    CategoryFormComponent,
    StaffContentFormComponent,
    FooterComponent,
    EditStaffprofileComponent,
    EditStaffPostComponent,
    StdNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatProgressBarModule,
    HttpClientModule
    // NgCircleProgressModule.forRoot()

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
