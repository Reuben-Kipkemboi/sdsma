import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { StudentComponent } from './student/student.component';
import { StdProfileComponent } from './student/std-profile/std-profile.component';
import { StdPostFormComponent } from './student/std-post/std-post-form/std-post-form.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { StaffContentFormComponent } from './staff-content-form/staff-content-form.component';
import { CategoryComponent } from './category/category.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { StaffPageComponent } from './staff-page/staff-page.component';
import { StaffProfileComponent } from './staff-profile/staff-profile.component';
import { EditStaffprofileComponent } from './edit-staffprofile/edit-staffprofile.component';
import { AdminComponent } from './admin/admin.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HeropageComponent } from './heropage/heropage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path:'',
    children:[
      {path:'student', component:StudentComponent},
      {path: 'profile/edit', component: StdProfileComponent},
      {path: 'add/post', component: StdPostFormComponent}
    ]
  },
  { path: 'admin', component: AdminComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'heropage', component: HeropageComponent },
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'student-page', component: StudentComponent },
  { path: 'profile', component: StaffProfileComponent },
  { path: 'staff-page', component: StaffPageComponent },
  { path: 'single-post', component: SinglePostComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'staff-content-form', component: StaffContentFormComponent },
  { path: 'category-form', component: CategoryFormComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'edit-staffprofile', component:EditStaffprofileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents=[StaffProfileComponent,StaffPageComponent,CategoryComponent,StaffContentFormComponent,CategoryFormComponent,FooterComponent,EditStaffprofileComponent]
