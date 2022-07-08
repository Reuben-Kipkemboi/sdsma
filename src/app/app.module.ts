import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { AdminComponent } from './admin/admin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeropageComponent } from './heropage/heropage.component';
import { SidebarComponent } from './homepage/sidebar/sidebar.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { ContentComponent } from './homepage/content/content.component';
import { HeronavbarComponent } from './heropage/heronavbar/heronavbar.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ReportsComponent } from './admin/reports/reports.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AdmincontentComponent } from './admin/admincontent/admincontent.component';
import { UsersComponent } from './admin/users/users.component';
// import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
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


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatProgressBarModule,
    HttpClientModule
    // NgCircleProgressModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
