import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { EmployeeloginComponent } from './components/employeelogin/employeelogin.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmployeehomeComponent } from './components/employeehome/employeehome.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { ViewAttendanceComponent } from './components/view-attendance/view-attendance.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { ViewAttendanceEmpComponent } from './components/view-attendance-emp/view-attendance-emp.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { EditAttendanceComponent } from './components/edit-attendance/edit-attendance.component';

const appRoutes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'admin', component:AdminloginComponent},
  {path:'admin/home',component:AdminHomeComponent},
  {path:'newEmployee',component:NewEmployeeComponent},
  {path:'admin/home/editEmployee/:empId',component:EmployeeEditComponent},
  {path:'admin/home/viewAttendance/:empId', component:ViewAttendanceComponent},
  {path:'employee', component:EmployeeloginComponent},
  {path:'employee/home',component:EmployeehomeComponent},
  {path:'employee/home/:empId',component:ViewAttendanceEmpComponent},
  {path:'admin/home/changePassword/:id',component:ChangePasswordComponent},
  {path:'employee/home/changePassword/:id',component:ChangePasswordComponent},
  {path:'admin/home/viewAttendance/editAttendance/:id',component:EditAttendanceComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    AdminloginComponent,
    EmployeeloginComponent,
    AdminHomeComponent,
    NewEmployeeComponent,
    PageNotFoundComponent,
    EmployeehomeComponent,
    EmployeeEditComponent,
    ViewAttendanceComponent,
    AdminSidebarComponent,
    ViewAttendanceEmpComponent,
    ChangePasswordComponent,
    EditAttendanceComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
