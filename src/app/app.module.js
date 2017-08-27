"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var course_page_component_1 = require("./admin/course/course.page.component");
var admin_dashboard_page_component_1 = require("./admin/dashboard/admin.dashboard.page.component");
var landing_page_component_1 = require("./landing/landing.page.component");
var login_page_component_1 = require("./login/login.page.component");
var signup_page_component_1 = require("./signup/signup.page.component");
var coursedetails_page_component_1 = require("./user/courseDetails/coursedetails.page.component");
var course_list_page_component_1 = require("./user/courselist/course.list.page.component");
var user_dashboard_page_component_1 = require("./user/dashboard/user.dashboard.page.component");
var user_lesson_details_page_component_1 = require("./user/userLessonDetails/user.lesson.details.page.component");
var navbar_componet_1 = require("./common/component/navbar/navbar.componet");
var ng2_semantic_ui_1 = require("ng2-semantic-ui");
var routes_path = [
    { path: '', component: app_component_1.AppComponent },
    { path: 'admin/course', component: course_page_component_1.CoursePageComponent },
    { path: 'admin/dashboard', component: admin_dashboard_page_component_1.AdminDashBoardPageComponent },
    { path: 'landing', component: landing_page_component_1.LandingPageComponent },
    { path: 'login', component: login_page_component_1.LoginPageComponent },
    { path: 'signup', component: signup_page_component_1.SignupPageComponent },
    { path: 'user/courseDetails', component: coursedetails_page_component_1.CourseDetailsPageComponent },
    { path: 'user/courseList', component: course_list_page_component_1.CourseListPageComponent },
    { path: 'user/dashboard', component: user_dashboard_page_component_1.UserDashBoardPageComponent },
    { path: 'user/userLessonDetails', component: user_lesson_details_page_component_1.UserLessonDetailsPageComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(routes_path), ng2_semantic_ui_1.SuiModule],
        declarations: [app_component_1.AppComponent, coursedetails_page_component_1.CourseDetailsPageComponent, admin_dashboard_page_component_1.AdminDashBoardPageComponent,
            landing_page_component_1.LandingPageComponent, login_page_component_1.LoginPageComponent, signup_page_component_1.SignupPageComponent, coursedetails_page_component_1.CourseDetailsPageComponent, course_list_page_component_1.CourseListPageComponent,
            user_dashboard_page_component_1.UserDashBoardPageComponent, course_page_component_1.CoursePageComponent, user_lesson_details_page_component_1.UserLessonDetailsPageComponent, navbar_componet_1.Navbar],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map