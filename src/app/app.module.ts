import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { RouterModule,Routes} from '@angular/router';
import { CoursePageComponent } from './admin/course/course.page.component';
import { AdminDashBoardPageComponent} from './admin/dashboard/admin.dashboard.page.component';
import { LandingPageComponent } from './landing/landing.page.component';
import { LoginPageComponent } from './login/login.page.component';
import { SignupPageComponent } from './signup/signup.page.component';
import { CourseDetailsPageComponent} from './user/courseDetails/coursedetails.page.component';
import { CourseListPageComponent} from './user/courselist/course.list.page.component';
import { UserDashBoardPageComponent} from './user/dashboard/user.dashboard.page.component';
import { UserLessonDetailsPageComponent } from './user/userLessonDetails/user.lesson.details.page.component';

import {Navbar} from './common/component/navbar/navbar.componet';

import { SuiModule } from 'ng2-semantic-ui';


const routes_path: Routes = [ 
  { path :'', component:AppComponent},
  { path: 'admin/course', component: CoursePageComponent },
  { path: 'admin/dashboard', component: AdminDashBoardPageComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'user/courseDetails', component: CourseDetailsPageComponent },
  { path: 'user/courseList', component: CourseListPageComponent },
  { path: 'user/dashboard', component: UserDashBoardPageComponent },
  { path: 'user/userLessonDetails', component: UserLessonDetailsPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } 
  ]


@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot(routes_path),SuiModule ],
  declarations: [ AppComponent,CourseDetailsPageComponent,AdminDashBoardPageComponent
                  ,LandingPageComponent,LoginPageComponent,SignupPageComponent,CourseDetailsPageComponent, CourseListPageComponent,
                  UserDashBoardPageComponent,CoursePageComponent,UserLessonDetailsPageComponent,Navbar ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
