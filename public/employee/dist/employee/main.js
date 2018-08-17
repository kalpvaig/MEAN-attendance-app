(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/adminlogin/adminlogin.component */ "./src/app/components/adminlogin/adminlogin.component.ts");
/* harmony import */ var _components_employeelogin_employeelogin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/employeelogin/employeelogin.component */ "./src/app/components/employeelogin/employeelogin.component.ts");
/* harmony import */ var _components_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/admin-home/admin-home.component */ "./src/app/components/admin-home/admin-home.component.ts");
/* harmony import */ var _components_new_employee_new_employee_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/new-employee/new-employee.component */ "./src/app/components/new-employee/new-employee.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_employeehome_employeehome_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/employeehome/employeehome.component */ "./src/app/components/employeehome/employeehome.component.ts");
/* harmony import */ var _components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/employee-edit/employee-edit.component */ "./src/app/components/employee-edit/employee-edit.component.ts");
/* harmony import */ var _components_view_attendance_view_attendance_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/view-attendance/view-attendance.component */ "./src/app/components/view-attendance/view-attendance.component.ts");
/* harmony import */ var _components_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/admin-sidebar/admin-sidebar.component */ "./src/app/components/admin-sidebar/admin-sidebar.component.ts");
/* harmony import */ var _components_view_attendance_emp_view_attendance_emp_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/view-attendance-emp/view-attendance-emp.component */ "./src/app/components/view-attendance-emp/view-attendance-emp.component.ts");
/* harmony import */ var _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/change-password/change-password.component */ "./src/app/components/change-password/change-password.component.ts");
/* harmony import */ var _components_edit_attendance_edit_attendance_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/edit-attendance/edit-attendance.component */ "./src/app/components/edit-attendance/edit-attendance.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: '', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"] },
    { path: 'admin', component: _components_adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_8__["AdminloginComponent"] },
    { path: 'admin/home', component: _components_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_10__["AdminHomeComponent"] },
    { path: 'newEmployee', component: _components_new_employee_new_employee_component__WEBPACK_IMPORTED_MODULE_11__["NewEmployeeComponent"] },
    { path: 'admin/home/editEmployee/:empId', component: _components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_14__["EmployeeEditComponent"] },
    { path: 'admin/home/viewAttendance/:empId', component: _components_view_attendance_view_attendance_component__WEBPACK_IMPORTED_MODULE_15__["ViewAttendanceComponent"] },
    { path: 'employee', component: _components_employeelogin_employeelogin_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeloginComponent"] },
    { path: 'employee/home', component: _components_employeehome_employeehome_component__WEBPACK_IMPORTED_MODULE_13__["EmployeehomeComponent"] },
    { path: 'employee/home/:empId', component: _components_view_attendance_emp_view_attendance_emp_component__WEBPACK_IMPORTED_MODULE_17__["ViewAttendanceEmpComponent"] },
    { path: 'admin/home/changePassword/:id', component: _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_18__["ChangePasswordComponent"] },
    { path: 'employee/home/changePassword/:id', component: _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_18__["ChangePasswordComponent"] },
    { path: 'admin/home/viewAttendance/editAttendance/:id', component: _components_edit_attendance_edit_attendance_component__WEBPACK_IMPORTED_MODULE_19__["EditAttendanceComponent"] },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _components_adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_8__["AdminloginComponent"],
                _components_employeelogin_employeelogin_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeloginComponent"],
                _components_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_10__["AdminHomeComponent"],
                _components_new_employee_new_employee_component__WEBPACK_IMPORTED_MODULE_11__["NewEmployeeComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
                _components_employeehome_employeehome_component__WEBPACK_IMPORTED_MODULE_13__["EmployeehomeComponent"],
                _components_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_14__["EmployeeEditComponent"],
                _components_view_attendance_view_attendance_component__WEBPACK_IMPORTED_MODULE_15__["ViewAttendanceComponent"],
                _components_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["AdminSidebarComponent"],
                _components_view_attendance_emp_view_attendance_emp_component__WEBPACK_IMPORTED_MODULE_17__["ViewAttendanceEmpComponent"],
                _components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_18__["ChangePasswordComponent"],
                _components_edit_attendance_edit_attendance_component__WEBPACK_IMPORTED_MODULE_19__["EditAttendanceComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin-home/admin-home.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/admin-home/admin-home.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.main {\n    margin-left: 260px; /* Same as the width of the sidenav */\n    font-size: 16px; /* Increased text to enable scrolling */\n    padding: 0px 10px;\n}\n.top{\n    margin-top: 7px;\n}\nbody {\n    font-family: 'Varela Round', sans-serif;\n}\n.modal-confirm {\t\t\n    color: #636363;\n    width: 550px;\n}\n.modal-confirm .modal-content {\n    padding: 20px;\n    border-radius: 5px;\n    border: none;        \n}\n.modal-confirm .modal-header {\n    padding: 0 15px;\n    border-bottom: none;   \n    position: relative;\n}\n.modal-confirm h4 {\n    display: inline-block;\n    font-size: 26px;\n}\n.modal-confirm .close {\n    position: absolute;\n    top: -5px;\n    right: -5px;\n}\n.modal-confirm .modal-body {\n    color: #999;\n}\n.modal-confirm .modal-footer {\n    background: #ecf0f1;\n    border-color: #e6eaec;\n    text-align: right;\n    margin: 0 -20px -20px;\n    border-radius: 0 0 5px 5px;\n}\n.modal-confirm .btn {\n    color: #fff;\n    border-radius: 4px;\n    transition: all 0.4s;\n    border: none;\n    padding: 8px 20px;\n    outline: none !important;\n}\n.modal-confirm .btn-info {\n    background: #b0c1c6;\n}\n.modal-confirm .btn-info:hover, .modal-confirm .btn-info:focus {\n    background: #92a9af;\n}\n.modal-confirm .btn-danger {\n    background: #f15e5e;\n}\n.modal-confirm .btn-danger:hover, .modal-confirm .btn-danger:focus {\n    background: #ee3535;\n}\n.modal-confirm .modal-footer .btn + .btn {\n    margin-left: 10px;\n}\n.trigger-btn {\n    display: inline-block;\n    margin: 100px auto;\n}"

/***/ }),

/***/ "./src/app/components/admin-home/admin-home.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin-home/admin-home.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-admin-sidebar></app-admin-sidebar>\n<div class=\"main\">       \n            <div class=\"well\">\n                    <div class=\"card mb-4 use\">\n                            <div class=\"card-header text-center text-white\" style=\"background-color: #343a40!important;\">\n                              <i class=\"fas fa-table\"></i>\n                              <h4>Employee List</h4>\n                    </div>\n                            <div class=\"card-body\">\n                              <div class=\"table-responsive text-center\">\n                                <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n                                  <thead>\n                                    <tr>\n                                      <th class=\"text-center\">Name</th>\n                                      <th class=\"text-center\">Email</th>\n                                      <th class=\"text-center\">Date of Birth<br>(yyyy/mm/dd)</th>\n                                      <th class=\"text-center\">Address</th>\n                                      <th class=\"text-center\">Phone</th>\n                                      <th class=\"text-center\">Actions</th>\n                                    </tr>\n                                  </thead>\n                                  <tfoot>\n                                    <tr>\n                                      <th class=\"text-center\">Name</th>\n                                      <th class=\"text-center\">Email</th>\n                                      <th class=\"text-center\">Date of Birth<br>(yyyy/mm/dd)</th>\n                                      <th class=\"text-center\">Address</th>\n                                      <th class=\"text-center\">Phone</th>\n                                      <th class=\"text-center\">Actions</th>\n                                    </tr>\n                                  </tfoot>\n                                  \n                                  <tbody>\n                                    <tr *ngFor=\"let employee of employees\">\n                                      <td class=\"text-info\"><br>{{ employee.fname }} {{ employee.lname }}</td>\n                                      <td class=\"text-info\"><br>{{ employee.email }}</td>\n                                      <td class=\"text-info\"><br>{{ employee.dob }}</td>\n                                      <td class=\"text-info\"><br>{{ employee.address }}</td>\n                                      <td class=\"text-info\"><br>{{ employee.phone }}</td>\n                                      <td>\n                                          <button class=\"btn btn-warning btn-sm btn-block \" (click)=\"onDeleteClick(employee._id)\">Delete</button>\n                                          <!-- Modal HTML -->\n                                            <div id=\"myModal\" class=\"modal fade\">\n                                                <div class=\"modal-dialog modal-confirm\">\n                                                  <div class=\"modal-content\">\n                                                    <div class=\"modal-header\">\t\t\t\n                                                      <h4 class=\"modal-title\">Confirmation</h4>\t\n                                                              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                                                    </div>\n                                                    <div class=\"modal-body\">\n                                                      <p>\"data-toggle=\"modal\" href=\"#myModal\"\"Are you sure you want to delete your employee? This action cannot be undone and you will be unable to recover any data.</p>\n                                                    </div>\n                                                    <div class=\"modal-footer\">\n                                                      <button class=\"btn btn-info\" data-dismiss=\"modal\">Cancel</button>\n                                                      <button class=\"btn btn-danger\"  data-dismiss=\"modal\" >Yes, delete it!</button>\n                                                    </div>\n                                                  </div>\n                                                </div>\n                                              </div> \n                                          <button class=\"btn btn-secondary btn-sm btn-block top\" (click)=\"onViewClick(employee._id)\">View attendance</button>\n                                          <button class=\"btn btn-success btn-sm btn-block\" (click)=\"onEditClick(employee)\">Edit</button> \n                                                                                    \n                                     </td>\n                                    </tr>\n                                  </tbody>\n                              </table>\n                        </div>\n                        </div>\n                        </div>\n                \n                \n            </div>\n        \n        </div>\n     "

/***/ }),

/***/ "./src/app/components/admin-home/admin-home.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/admin-home/admin-home.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminHomeComponent = /** @class */ (function () {
    function AdminHomeComponent(dataService, router) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        var token = JSON.parse(localStorage.getItem('isAdmin'));
        if (token == null) {
            this.router.navigateByUrl('/admin');
        }
        else if (token != null) {
            this.dataService.getAdminDetails(token.data).subscribe(function (signal) {
                if (signal.message == 'loginError' || signal.message == 'headerUndefined') {
                    localStorage.clear();
                    alert("Login Timeout");
                    _this.router.navigateByUrl('/admin');
                }
                else if (signal.message == undefined) {
                    _this.dataService.checkAdminLoggedIn(token.data).subscribe(function (employees) {
                        if (employees.message != undefined) {
                            alert(employees.message);
                        }
                        _this.employees = employees;
                    });
                }
            });
        }
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
    };
    AdminHomeComponent.prototype.onDeleteClick = function (id) {
        var _this = this;
        var result = confirm("Are you sure to delete this employee data forever?");
        if (result) {
            var token = JSON.parse(localStorage.getItem('isAdmin'));
            this.dataService.deleteEmployee(id, token.data).subscribe(function (res) {
                if (res.message == 'loginError' || res.message == 'headerUndefined') {
                    localStorage.clear();
                    alert("Login Timeout");
                    _this.router.navigateByUrl('/admin');
                }
                else if (res.message == "fetchingError") {
                    alert("There is an error in fetching data");
                }
                else if (res.message == true) {
                    for (var i = 0; i < _this.employees.length; i++) {
                        if (_this.employees[i]._id == id) {
                            _this.employees.splice(i, 1);
                        }
                    }
                }
            });
        }
    };
    AdminHomeComponent.prototype.onViewClick = function (empId) {
        this.router.navigate(['admin/home/viewAttendance', empId]);
    };
    AdminHomeComponent.prototype.onEditClick = function (employee) {
        this.router.navigate(['admin/home/editEmployee', employee._id]);
    };
    AdminHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-home',
            template: __webpack_require__(/*! ./admin-home.component.html */ "./src/app/components/admin-home/admin-home.component.html"),
            styles: [__webpack_require__(/*! ./admin-home.component.css */ "./src/app/components/admin-home/admin-home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminHomeComponent);
    return AdminHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-sidebar/admin-sidebar.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/admin-sidebar/admin-sidebar.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\n    height: 100%;\n    width: 260px;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    overflow-x: hidden;\n    padding-top: 20px;\n    margin-top:60px;\n}\n\n.sidenav a {\n    padding: 6px 8px 6px 16px;\n    text-decoration: none;\n    font-size: 12px;\n    color: #818181;\n    display: block;\n}\n"

/***/ }),

/***/ "./src/app/components/admin-sidebar/admin-sidebar.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin-sidebar/admin-sidebar.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav text-center\" style=\"background-color: #343a40!important;\">\n    <ul class=\"sidebar navbar-nav\"   style=\"font-size: 12px\"> \n      <li class=\"nav-item\">\n              <a class=\"nav-link text-white\" >\n                <span>Welcome Admin</span>\n              </a>\n      </li>\n  \n      <li class=\"nav-item\">\n              <a class=\"nav-link text-white\" >\n                <span>{{ adminPostData.name }}</span>\n              </a>\n      </li>\n      <li class=\"nav-item\">\n              <a class=\"nav-link text-white\" >\n                <span>{{ adminPostData.email }}</span>\n              </a>\n      </li>\n      <br>\n      <li class=\"nav-item\">\n              <button class=\"btn btn-warning btn-sm\"  routerLink=\"/newEmployee\">Register New Employee</button>  \n      </li>\n      <br>\n      <li class=\"nav-item\">\n          <button class=\"btn btn-success btn-sm\"  (click)=\"changePassword()\">Change Password</button>  \n      </li>\n      <br>\n      <li class=\"nav-item\">\n          <button class=\"btn btn-danger btn-sm\" (click)=\"logout()\">Logout</button>\n      </li>\n    </ul>\n  \n  </div> \n  "

/***/ }),

/***/ "./src/app/components/admin-sidebar/admin-sidebar.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin-sidebar/admin-sidebar.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSidebarComponent", function() { return AdminSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminSidebarComponent = /** @class */ (function () {
    function AdminSidebarComponent(dataService, router) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        this.adminPostData = {
            id: "",
            name: "",
            email: ""
        };
        var token = JSON.parse(localStorage.getItem('isAdmin'));
        this.dataService.getAdminDetails(token.data).subscribe(function (adminDetails) {
            _this.adminPostData = adminDetails;
        });
    }
    AdminSidebarComponent.prototype.ngOnInit = function () {
    };
    AdminSidebarComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigateByUrl('/admin');
    };
    AdminSidebarComponent.prototype.changePassword = function () {
        this.router.navigate(['admin/home/changePassword', this.adminPostData.id]);
    };
    AdminSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-sidebar',
            template: __webpack_require__(/*! ./admin-sidebar.component.html */ "./src/app/components/admin-sidebar/admin-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./admin-sidebar.component.css */ "./src/app/components/admin-sidebar/admin-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminSidebarComponent);
    return AdminSidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/adminlogin/adminlogin.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/adminlogin/adminlogin.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/adminlogin/adminlogin.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/adminlogin/adminlogin.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <div class=\"col-md-8 col-md-offset-3\" style=\"margin: auto\">\n  <div class=\"card card-login mx-auto mt-5\">\n    <h4 class=\"card-header text-center text-white\" style=\"background-color: #343a40!important;\">Admin Login</h4>\n      <div class=\"card-body\">\n        <form  class=\"text-center\" novalidate #f=\"ngForm\" (ngSubmit)=\"login(f)\">\n\n        \n            <label for=\"username\"><b>Username</b></label>\n            <input type=\"text\" placeholder=\"Enter Username\" [(ngModel)]=\"admin.username\" name=\"username\"  class=\"form-control\"\n            #userName=\"ngModel\"\n            required\n            >\n            <div *ngIf=\"userName.errors?.required && userName.touched\" class=\"alert alert-danger\">Username is Required</div>\n\n            <label for=\"password\"><b>Password</b></label>\n            <input type=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"admin.password\" name=\"password\" class=\"form-control\"\n            #userPassword=\"ngModel\"\n            required\n            >\n            <div *ngIf=\"userPassword.errors?.required && userPassword.touched\" class=\"alert alert-danger\">Password is Required</div>\n            <br>\n            <button type=\"submit\" class=\"btn text-white\" style=\"background-color: #563d7c;\">Login</button>\n           \n\n        </form>\n        <br>\n        <div class=\"text-center\">\n            <a class=\"d-block small\" href=\"#\">Forgot Password?</a>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/adminlogin/adminlogin.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/adminlogin/adminlogin.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminloginComponent", function() { return AdminloginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminloginComponent = /** @class */ (function () {
    function AdminloginComponent(dataService, router) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        this.admin = {
            username: '',
            password: ''
        };
        var token = JSON.parse(localStorage.getItem('isAdmin'));
        if (token != null) {
            this.dataService.getAdminDetails(token.data).subscribe(function (signal) {
                if (signal.message != 'loginError' && signal.message != 'headerUndefined') {
                    _this.router.navigateByUrl('/admin/home');
                }
            });
        }
    }
    AdminloginComponent.prototype.ngOnInit = function () {
    };
    AdminloginComponent.prototype.login = function () {
        var _this = this;
        if (this.admin.username != '' && this.admin.password != '') {
            this.dataService.loginAdmin(this.admin).subscribe(function (tokenfromapi) {
                _this.token = tokenfromapi.data;
                if (tokenfromapi.message == 'noUser') {
                    alert("Admin do not exist");
                }
                else if (tokenfromapi.message == 'wrongPassword') {
                    alert("Wrong Password");
                }
                else if (tokenfromapi.message == 'networkError') {
                    alert("There is network problem");
                }
                else if (_this.token != undefined) {
                    var adminLink = {
                        "visibility": "hidden"
                    };
                    localStorage.clear();
                    localStorage.setItem('isAdmin', JSON.stringify(tokenfromapi));
                    localStorage.setItem('isAdminLink', JSON.stringify(adminLink));
                    _this.router.navigateByUrl('/admin/home');
                }
            });
        }
        else {
            if (this.admin.username != '') {
                if (this.admin.password == '') {
                    alert('Please Enter Password');
                }
            }
            if (this.admin.password != '') {
                if (this.admin.username == '') {
                    alert('Please Enter Username');
                }
            }
            if (this.admin.username == '' && this.admin.password == '') {
                alert('Please Enter Username & Password');
            }
        }
    };
    AdminloginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adminlogin',
            template: __webpack_require__(/*! ./adminlogin.component.html */ "./src/app/components/adminlogin/adminlogin.component.html"),
            styles: [__webpack_require__(/*! ./adminlogin.component.css */ "./src/app/components/adminlogin/adminlogin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminloginComponent);
    return AdminloginComponent;
}());



/***/ }),

/***/ "./src/app/components/change-password/change-password.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/change-password/change-password.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    font-family: 'Varela Round', sans-serif;\n}\n.modal-confirm {\t\t\n    color: #636363;\n    width: 325px;\n}\n.modal-confirm .modal-content {\n    padding: 20px;\n    border-radius: 5px;\n    border: none;\n}\n.modal-confirm .modal-header {\n    border-bottom: none;   \n    position: relative;\n}\n.modal-confirm h4 {\n    text-align: center;\n    font-size: 26px;\n    margin: 30px 0 -15px;\n}\n.modal-confirm .form-control, .modal-confirm .btn {\n    min-height: 40px;\n    border-radius: 3px; \n}\n.modal-confirm .close {\n    position: absolute;\n    top: -5px;\n    right: -5px;\n}\n.modal-confirm .modal-footer {\n    border: none;\n    text-align: center;\n    border-radius: 5px;\n    font-size: 13px;\n}\n.modal-confirm .icon-box {\n    color: #fff;\t\t\n    position: absolute;\n    margin: 0 auto;\n    left: 0;\n    right: 0;\n    top: -70px;\n    width: 95px;\n    height: 95px;\n    border-radius: 50%;\n    z-index: 9;\n    background: #82ce34;\n    padding: 15px;\n    text-align: center;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);\n}\n.modal-confirm .icon-box i {\n    font-size: 58px;\n    position: relative;\n    top: 3px;\n}\n.modal-confirm.modal-dialog {\n    margin-top: 80px;\n}\n.modal-confirm .btn {\n    color: #fff;\n    border-radius: 4px;\n    background: #82ce34;\n    text-decoration: none;\n    transition: all 0.4s;\n    line-height: normal;\n    border: none;\n}\n.modal-confirm .btn:hover, .modal-confirm .btn:focus {\n    background: #6fb32b;\n    outline: none;\n}"

/***/ }),

/***/ "./src/app/components/change-password/change-password.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/change-password/change-password.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"col-md-8 col-md-offset-3\" style=\"margin: auto\">\n<div class=\"card\">\n    <h4 class=\"card-header text-center text-white\" style=\"background-color: #343a40!important;\">Change Your Password</h4>\n    <div class=\"card-body\">\n        <br>\n        <div class=\"row\">\n            <div class=\"col-md-1\"></div>\n            <div class=\"col-md-4 text-center\">\n                <h4><b>Old Password:</b></h4>  \n            </div> \n            <div class=\"col-md-6\">    \n                <input class=\"form-control\" type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" placeholder=\"Enter old password\" required>\n            </div>\n            <div class=\"col-md-1\"></div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <div class=\"col-md-1\"></div>\n            <div class=\"col-md-4 text-center\">\n                <h4><b>New Password:</b></h4>  \n            </div> \n            <div class=\"col-md-6\">    \n                <input class=\"form-control\" type=\"password\" [(ngModel)]=\"user.npassword\" name=\"npassword\" placeholder=\"Enter new password\" required>\n            </div>\n            <div class=\"col-md-1\"></div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <div class=\"col-md-1\"></div>\n            <div class=\"col-md-4 text-center\">\n                <h4><b>Confirm New Password:</b></h4>  \n            </div> \n            <div class=\"col-md-6\">    \n                <input class=\"form-control\" type=\"password\" [(ngModel)]=\"temp.ncpassword\" name=\"ncpassword\" placeholder=\"Confirm new password\" required>\n            </div>\n            <div class=\"col-md-1\"></div>\n        </div>\n        \n            \n    \n<br>\n<div class=\"text-center\">\n    <button class=\"btn btn-warning\" (click)=\"onPasswordChange()\">Submit</button>\n</div>\n<br><br>\n</div>\n</div>\n</div>\n\n<!-- Modal HTML -->\n<div id=\"myModal\" class=\"modal fade\">\n        <div class=\"modal-dialog modal-confirm\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header text-center\">\t\t\t\t\n                    <h4 class=\"modal-title\">Password is changed!</h4>\t\n                </div>\n                <div class=\"modal-body\">\n                    <p class=\"text-center\">Your have changed your password successfully.</p>\n                </div>\n                <div class=\"modal-footer\">\n                    <button class=\"btn btn-success btn-block\" data-dismiss=\"modal\" (click)=\"return()\">OK</button>\n                </div>\n            </div>\n        </div>\n    </div>  "

/***/ }),

/***/ "./src/app/components/change-password/change-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/change-password/change-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(dataService, router, route) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.user = {
            password: "",
            npassword: ""
        };
        this.temp = {
            ncpassword: ""
        };
        var token1 = JSON.parse(localStorage.getItem('isAdmin'));
        var token2 = JSON.parse(localStorage.getItem('isEmployee'));
        if (token1 == null) {
            if (token2 == null) {
                this.router.navigateByUrl('/');
            }
            else if (token2 != null) {
                this.dataService.checkEmployeeLoggedIn(token2.data).subscribe(function (signal) {
                    if (signal.message == 'loginError' || signal.message == 'headerUndefined') {
                        localStorage.clear();
                        alert("Login Timeout");
                        _this.router.navigateByUrl('/employee');
                    }
                    else if (signal.message == undefined) {
                        _this.route.params.subscribe(function (params) {
                            _this.id = params.id;
                            _this.dataService.checkPsdEmployee(token2.data, _this.id).subscribe(function (signal) {
                                if (signal.message == 'loginError' || signal.message == 'headerUndefined') {
                                    localStorage.clear();
                                    alert("Login Timeout");
                                    _this.router.navigateByUrl('/employee');
                                }
                                else if (signal.message == 'fetchingError') {
                                    alert('Unable to make action');
                                    _this.router.navigateByUrl('/employee/home');
                                }
                            });
                        });
                    }
                });
            }
        }
        if (token2 == null) {
            if (token1 == null) {
                this.router.navigateByUrl('/');
            }
            else if (token1 != null) {
                this.dataService.getAdminDetails(token1.data).subscribe(function (signal) {
                    if (signal.message == 'loginError' || signal.message == 'headerUndefined') {
                        localStorage.clear();
                        alert("Login Timeout");
                        _this.router.navigateByUrl('/admin');
                    }
                    else if (signal.message == undefined) {
                        _this.route.params.subscribe(function (params) {
                            _this.id = params.id;
                            _this.dataService.checkPsdAdmin(token1.data, _this.id).subscribe(function (signal) {
                                if (signal.message == 'loginError' || signal.message == 'headerUndefined') {
                                    localStorage.clear();
                                    alert("Login Timeout");
                                    _this.router.navigateByUrl('/admin');
                                }
                                else if (signal.message == 'fetchingError') {
                                    alert('Unable to make action');
                                    _this.router.navigateByUrl('/admin/home');
                                }
                            });
                        });
                    }
                });
            }
        }
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.onPasswordChange = function () {
        var _this = this;
        var cpass = this.temp.ncpassword;
        if (this.user.password != '' && this.user.npassword != '' && this.temp.ncpassword != '') {
            if (this.user.npassword == cpass) {
                var token1 = JSON.parse(localStorage.getItem('isAdmin'));
                var token2 = JSON.parse(localStorage.getItem('isEmployee'));
                if (token1 == null) {
                    var data = {
                        id: this.id,
                        flag: "e",
                        password: this.user.password,
                        npassword: this.user.npassword
                    };
                    this.dataService.changePassword(token2.data, data).subscribe(function (signal) {
                        if (signal.message == true) {
                            alert("Your password has been changed");
                            _this.router.navigateByUrl('/employee/home');
                        }
                        if (signal.message == "loginError" || signal.message == 'headerUndefined') {
                            localStorage.clear();
                            alert('Login Timeout');
                            _this.router.navigateByUrl('/employee');
                        }
                        else if (signal.message == 'fetchingError' || signal.message == 'You entered wrong old password' || signal.message == 'noUser') {
                            alert(signal.message);
                        }
                    });
                }
                if (token2 == null) {
                    var data = {
                        id: this.id,
                        flag: "a",
                        password: this.user.password,
                        npassword: this.user.npassword
                    };
                    this.dataService.changePassword(token1.data, data).subscribe(function (signal) {
                        if (signal.message == true) {
                            // $('#myModal').modal('show');
                            alert("Your password has been changed");
                            _this.router.navigateByUrl('/admin/home');
                        }
                        if (signal.message == "loginError" || signal.message == 'headerUndefined') {
                            localStorage.clear();
                            alert('Login Timeout');
                            _this.router.navigateByUrl('/admin');
                        }
                        else if (signal.message == 'fetchingError' || signal.message == 'You entered wrong old password' || signal.message == 'noUser') {
                            alert(signal.message);
                        }
                    });
                }
            }
            else {
                alert("mismatch confirm password");
            }
        }
        else {
            alert("Please fill all credentials");
        }
    };
    ChangePasswordComponent.prototype.return = function () {
        this.router.navigateByUrl('/admin/home');
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/components/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/components/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"https://media.licdn.com/dms/image/C560BAQHN3OzNjRJV1Q/company-logo_200_200/0?e=2159024400&v=beta&t=MXsSkdJEUw-JhmZrTNweclYMxS6KbL721Vr5Xoa-IaU\">\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.title = 'Kalpvaig Attendance Portal';
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-attendance/edit-attendance.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/edit-attendance/edit-attendance.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.main {\n    margin-left: 260px; /* Same as the width of the sidenav */\n    font-size: 16px; /* Increased text to enable scrolling */\n    padding: 0px 10px;\n}\n\n"

/***/ }),

/***/ "./src/app/components/edit-attendance/edit-attendance.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/edit-attendance/edit-attendance.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-admin-sidebar></app-admin-sidebar>\n\n<div class=\"main\">\n    <div class=\"col-md-12 col-md-offset-3\" style=\"margin: auto\">\n        <div class=\"card card-login mx-auto mt-5\">\n          <h3 class=\"card-header text-center text-white\" style=\"background-color: #343a40!important;\">\n              Update Attendance<br>Date(yyyy/mm/dd):{{edittableAttendance.checkInDate}}\n            </h3>\n            <div class=\"card-body\">\n                  <form (submit)=\"onUpdate()\" class=\"text-center\">\n                    <br>\n                      \n                   <div class=\"row\">\n                     <div class=\"col-md-1\"></div>   \n                     <div class=\"col-md-4\"> \n                      <div class=\"form-group\">\n                          <label><b>CheckIn Time</b></label>\n                          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"edittableAttendance.checkInTime\" name=\"checkInTime\" required>\n                      </div>\n                     </div>\n                     <div class=\"col-md-2\"></div>\n                     <div class=\"col-md-4\"> \n                          <div class=\"form-group\">\n                              <label><b>CheckOut Time</b></label>\n                              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"edittableAttendance.checkOutTime\" name=\"checkOutTime\" required>\n                          </div>\n                     </div>\n                     <div class=\"col-md-1\"></div>\n                  </div>    \n                  <div class=\"row\">\n                     <div class=\"col-md-1\"></div>   \n                     <div class=\"col-md-4\">\n                      <div class=\"form-group\">\n                              <label><b>Remark</b></label>\n                              <input class=\"form-control\" type=\"text\" [(ngModel)]=\"edittableAttendance.remark\" name=\"remark\" required>\n                      </div>\n                    </div>\n                    <div class=\"col-md-2\"></div>\n                    <div class=\"col-md-4\">  \n                            <div class=\"form-group\">\n                                <label><b>Status</b></label>\n                                <select [(ngModel)]=\"edittableAttendance.status\" name=\"status\" class=\"form-control\">     \n                                      <option value=\"Present\">Present</option>\n                                      <option value=\"Work from home\">Work From Home</option>\n                                      <option value=\"Absent\">Absent</option>\n                              </select>\n                            </div>\n                     </div>\n                    <div class=\"col-md-1\"></div> \n                  </div> \n                    <br>  \n                      <input type=\"submit\" class=\"btn text-white\" style=\"background-color: #563d7c;\" value=\"Update Attendance\">\n                    <br>\n                  </form>\n          </div>\n          <br>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/edit-attendance/edit-attendance.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/edit-attendance/edit-attendance.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditAttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAttendanceComponent", function() { return EditAttendanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference types="googlemaps" />



var EditAttendanceComponent = /** @class */ (function () {
    function EditAttendanceComponent(dataService, router, route) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.edittableAttendance = {
            "_id": "",
            "checkIndate": "",
            "checkInTime": "",
            "checkOutTime": "",
            "checkOutDate": "",
            "checkOutLocation": "",
            "checkInLocation": "",
            "status": "",
            "remark": ""
        };
        var token = JSON.parse(localStorage.getItem('isAdmin'));
        if (token == null) {
            this.router.navigateByUrl("/admin");
        }
        else if (token != null) {
            this.dataService.getAdminDetails(token.data).subscribe(function (signal) {
                if (signal.message == 'loginError' || signal.message == 'headerUndefined') {
                    localStorage.clear();
                    alert("Login Timeout");
                    _this.router.navigateByUrl('/admin');
                }
                else if (signal.message == undefined) {
                    _this.route.params.subscribe(function (params) {
                        _this.dataService.getAttendance(token.data, params.id).subscribe(function (attendance) {
                            if (attendance.message == 'loginError' || attendance.message == 'headerUndefined') {
                                localStorage.clear();
                                alert("Login Timeout");
                                _this.router.navigateByUrl('/admin');
                            }
                            else if (attendance.message == 'fetchingError') {
                                alert('Failed to get attendance details');
                                _this.router.navigateByUrl('/admin/home');
                            }
                            else if (attendance.message == undefined) {
                                _this.edittableAttendance = attendance;
                            }
                        });
                    });
                }
            });
        }
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                showPosition(position);
            }, function (error) {
                switch (error.code) {
                    case 1:
                        alert('Location Permission Denied');
                        break;
                    case 2:
                        alert('Location Position Unavailable');
                        break;
                    case 3:
                        alert('Location Detection Timeout');
                        break;
                }
            });
        }
        function showPosition(position) {
            var latVar = 0.0;
            var lngVar = 0.0;
            latVar = position.coords.latitude;
            lngVar = position.coords.longitude;
            geocodeLatLng(latVar, lngVar);
        }
        function geocodeLatLng(latGet, lngGet) {
            var geocoder = new google.maps.Geocoder;
            var latlng = { lat: parseFloat(latGet), lng: parseFloat(lngGet) };
            geocoder.geocode({ 'location': latlng }, function (results, status) {
                if (results[0]) {
                    EditAttendanceComponent_1.locationPosition = results[0].formatted_address;
                }
                else {
                    window.alert('Geocoder failed due to: ' + status);
                }
            });
        }
    }
    EditAttendanceComponent_1 = EditAttendanceComponent;
    EditAttendanceComponent.prototype.ngOnInit = function () {
    };
    EditAttendanceComponent.prototype.onUpdate = function () {
        var _this = this;
        var token = JSON.parse(localStorage.getItem('isAdmin'));
        if (this.edittableAttendance.status == "Absent") {
            this.edittableAttendance.checkInTime = "none";
            this.edittableAttendance.checkOutTime = "none";
            this.edittableAttendance.checkOutDate = "none";
            this.edittableAttendance.checkInLocation = "none";
            this.edittableAttendance.checkOutLocation = "none";
            this.edittableAttendance.remark = "none";
            this.dataService.editAttendance(token.data, this.edittableAttendance).subscribe(function (signal) {
                _this.router.navigate(['admin/home/viewAttendance', signal.empId]);
            });
        }
        else {
            if (EditAttendanceComponent_1.locationPosition != undefined) {
                this.edittableAttendance.checkInLocation = EditAttendanceComponent_1.locationPosition;
                this.edittableAttendance.checkOutLocation = EditAttendanceComponent_1.locationPosition;
                if (this.edittableAttendance.checkOutDate == "Yet to be Done") {
                    this.edittableAttendance.checkOutDate = this.edittableAttendance.checkIndate;
                    this.dataService.editAttendance(token.data, this.edittableAttendance).subscribe(function (signal) {
                        if (signal.message == 'loginError' || signal.message == 'headerUndefined') {
                            localStorage.clear();
                            alert("Login Timeout");
                            _this.router.navigateByUrl('/admin');
                        }
                        else if (signal.message == 'fetchingError') {
                            alert('Failed to update attendance');
                        }
                        else if (signal.message == undefined) {
                            _this.router.navigate(['admin/home/viewAttendance', signal.empId]);
                        }
                    });
                }
                else {
                    this.dataService.editAttendance(token.data, this.edittableAttendance).subscribe(function (signal) {
                        if (signal.message == 'loginError' || signal.message == 'headerUndefined') {
                            localStorage.clear();
                            alert("Login Timeout");
                            _this.router.navigateByUrl('/admin');
                        }
                        else if (signal.message == 'fetchingError') {
                            alert('Failed to update attendance');
                        }
                        else if (signal.message == undefined) {
                            _this.router.navigate(['admin/home/viewAttendance', signal.empId]);
                        }
                    });
                }
            }
            else {
                alert("Please turn on your location Or Refresh your page");
            }
        }
    };
    EditAttendanceComponent = EditAttendanceComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-attendance',
            template: __webpack_require__(/*! ./edit-attendance.component.html */ "./src/app/components/edit-attendance/edit-attendance.component.html"),
            styles: [__webpack_require__(/*! ./edit-attendance.component.css */ "./src/app/components/edit-attendance/edit-attendance.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditAttendanceComponent);
    return EditAttendanceComponent;
    var EditAttendanceComponent_1;
}());



/***/ }),

/***/ "./src/app/components/employee-edit/employee-edit.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/employee-edit/employee-edit.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n    margin-left: 260px; /* Same as the width of the sidenav */\n    font-size: 16px; /* Increased text to enable scrolling */\n    padding: 0px 10px;\n}\n"

/***/ }),

/***/ "./src/app/components/employee-edit/employee-edit.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/employee-edit/employee-edit.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-admin-sidebar></app-admin-sidebar>\n<div class=\"main\">\n        <div class=\"col-md-12 col-md-offset-3\" style=\"margin: auto\">\n          <div class=\"card card-login mx-auto mt-5\">\n            <h4 class=\"card-header text-center text-white\" style=\"background-color: #343a40!important;\">Update Employee</h4>\n              <div class=\"card-body\">\n                    <form (submit)=\"onUpdate()\" class=\"text-center\">\n                     <div class=\"row\">\n                       <div class=\"col-md-1\"></div>   \n                       <div class=\"col-md-4\"> \n                        <div class=\"form-group\">\n                            <label><b>First Name</b></label>\n                            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employee.fname\" name=\"fname\" required>\n                        </div>\n                       </div>\n                       <div class=\"col-md-2\"></div>\n                       <div class=\"col-md-4\"> \n                            <div class=\"form-group\">\n                                <label><b>Last Name</b></label>\n                                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employee.lname\" name=\"lname\" required>\n                            </div>\n                       </div>\n                       <div class=\"col-md-1\"></div>\n                    </div>    \n                    <div class=\"row\">\n                       <div class=\"col-md-1\"></div>  \n                       <div class=\"col-md-4\"> \n                        <div class=\"form-group\">\n                            <label><b>Date of Birth</b></label>\n                            <input class=\"form-control\" type=\"date\" [(ngModel)]=\"employee.dob\" name=\"dob\" required>\n                        </div>\n                       </div>\n                       <div class=\"col-md-2\"></div>\n                       <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                                <label><b>Phone Number</b></label>\n                                <input class=\"form-control\" type=\"number\" [(ngModel)]=\"employee.phone\" name=\"phone\" required>\n                        </div>\n                      </div>\n                      <div class=\"col-md-1\"></div> \n                    </div>  \n                    <div class=\"row\">\n                       <div class=\"col-md-1\"></div> \n                       <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                                <label><b>Email Address</b></label>\n                                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employee.email\" name=\"email\" required>\n                            </div> \n                        </div>\n                       <div class=\"col-md-2\"></div> \n                       <div class=\"col-md-4\"> \n                        <div class=\"form-group\">\n                            <label><b>Address</b></label>\n                            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employee.address\" name=\"address\" required>\n                        </div>\n                       </div>\n                    <div class=\"col-md-1\"></div>     \n                    </div>    \n                    <div class=\"row\">\n                       <div class=\"col-md-1\"></div> \n                       <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label><b>Set New Password</b></label>\n                            <input class=\"form-control\" type=\"password\" [(ngModel)]=\"employee.password\" name=\"password\" required>\n                        </div>\n                       </div>\n                       <div class=\"col-md-2\"></div> \n                       <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label><b>Confirm Password</b></label>\n                            <input class=\"form-control\" type=\"password\" [(ngModel)]=\"temp.password\" name=\"password\" required>\n                        </div>\n                       </div>\n                       <div class=\"col-md-1\"></div>\n                    </div>   \n                        <input type=\"submit\" class=\"btn text-white\" style=\"background-color: #563d7c;\" value=\"Update\">\n                    \n                    </form>\n            </div>\n            <br>\n        </div>\n    </div>\n </div>"

/***/ }),

/***/ "./src/app/components/employee-edit/employee-edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/employee-edit/employee-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmployeeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeEditComponent", function() { return EmployeeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeEditComponent = /** @class */ (function () {
    function EmployeeEditComponent(dataService, router, route) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.employee = {
            id: '',
            email: '',
            fname: '',
            lname: '',
            dob: '',
            address: '',
            phone: '',
            password: ''
        };
        this.temp = {
            password: ''
        };
        var token = JSON.parse(localStorage.getItem('isAdmin'));
        if (token == null) {
            this.router.navigateByUrl('/admin');
        }
        else {
            this.dataService.getAdminDetails(token.data).subscribe(function (signal) {
                if (signal.message == 'loginError' || signal.message == 'headerUndefined') {
                    localStorage.clear();
                    alert("Login Timeout");
                    _this.router.navigateByUrl('/admin');
                }
                else {
                    _this.route.params.subscribe(function (params) {
                        _this.dataService.getEmployeeToEdit(token.data, params.empId).subscribe(function (employeeDetails) {
                            if (employeeDetails.message == "loginError" || employeeDetails.message == "headerUndefined") {
                                localStorage.clear();
                                alert("Login Timeout");
                                _this.router.navigateByUrl('/admin');
                            }
                            else if (employeeDetails.message == "fetchingError") {
                                alert("There is a problem to fetch details");
                                _this.router.navigateByUrl('/admin/home');
                            }
                            else if (employeeDetails.message == 'No Such Employee Exists') {
                                alert('No Such Employee Exists');
                                _this.router.navigateByUrl('/admin/home');
                            }
                            else if (employeeDetails.message == undefined) {
                                _this.employee.id = employeeDetails._id;
                                _this.employee.fname = employeeDetails.fname;
                                _this.employee.lname = employeeDetails.lname;
                                _this.employee.email = employeeDetails.email;
                                _this.employee.dob = employeeDetails.dob;
                                _this.employee.phone = employeeDetails.phone;
                                _this.employee.address = employeeDetails.address;
                            }
                        });
                    });
                }
            });
        }
    }
    EmployeeEditComponent.prototype.ngOnInit = function () {
    };
    EmployeeEditComponent.prototype.onUpdate = function () {
        var _this = this;
        if (this.employee.fname != '' && this.employee.lname != '' && this.employee.email != '' && this.employee.dob != '' && this.employee.address != '') {
            var cpass = this.temp.password;
            if (this.employee.password == cpass) {
                var token = JSON.parse(localStorage.getItem('isAdmin'));
                this.dataService.updateEmployee(this.employee, token.data).subscribe(function (employee) {
                    if (employee.message == true) {
                        alert('Employee update process is successfully done');
                        _this.router.navigateByUrl('/admin/home');
                    }
                    if (employee.message == 'loginError' || employee.message == 'headerUndefined') {
                        localStorage.clear();
                        alert("Login Timeout");
                        _this.router.navigateByUrl('/admin');
                    }
                    if (employee.message == 'fetchingError' || employee.message == 'Failed to update employee' || employee.message == 'No Such Employee Exists') {
                        alert(employee.message);
                    }
                });
            }
            else {
                alert("mismatch confirm password");
            }
        }
        else {
            alert("Please Fill All Credentials First");
        }
    };
    EmployeeEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-edit',
            template: __webpack_require__(/*! ./employee-edit.component.html */ "./src/app/components/employee-edit/employee-edit.component.html"),
            styles: [__webpack_require__(/*! ./employee-edit.component.css */ "./src/app/components/employee-edit/employee-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EmployeeEditComponent);
    return EmployeeEditComponent;
}());



/***/ }),

/***/ "./src/app/components/employeehome/employeehome.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/employeehome/employeehome.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/employeehome/employeehome.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/employeehome/employeehome.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n        <div class=\"card\">\n                <h4 class=\"card-header text-center text-white\" style=\"background-color: #343a40!important;\">Welcome,{{ employeePostData.fname }} {{ employeePostData.lname }} </h4>\n                <div class=\"card-body\">\n                        <div class=\"row\">\n                                <div class=\"col-md-2\"></div>                            \n                                <div class=\"col-md-4\">\n                                    <h4><b>Name:</b></h4>  \n                                </div> \n                                <div class=\"col-md-6\">\n                                        <h4><b>{{ employeePostData.fname }} {{ employeePostData.lname }}</b></h4>\n                                </div>\n                        </div>\n                        <br>\n                        <div class=\"row\">\n                                <div class=\"col-md-2\"></div>\n                                <div class=\"col-md-4\">\n                                    <h4><b>Date of Birth:</b></h4>  \n                                </div> \n                                <div class=\"col-md-6\">\n                                        <h4><b>{{ employeePostData.dob }}</b></h4>\n                                </div>\n                                \n                        </div>\n                        <br>\n                        <div class=\"row\">\n                                <div class=\"col-md-2\"></div>\n                                <div class=\"col-md-4\">\n                                    <h4><b>Email:</b></h4>  \n                                </div> \n                                <div class=\"col-md-6\">\n                                        <h4><b>{{ employeePostData.email }}</b></h4>\n                                </div>\n                                \n                        </div>\n                        <br>\n                        <div class=\"row\">\n                                <div class=\"col-md-2\"></div>\n                                <div class=\"col-md-4\">\n                                    <h4><b>Phone:</b></h4>  \n                                </div> \n                                <div class=\"col-md-6\">\n                                        <h4><b>{{ employeePostData.phone }}</b></h4>\n                                </div>\n                                \n                        </div>\n                        <br>\n                        <div class=\"row\">\n                                <div class=\"col-md-2\"></div>\n                                <div class=\"col-md-4\">\n                                    <h4><b>Address:</b></h4>  \n                                </div> \n                                <div class=\"col-md-6\">\n                                        <h4><b>{{ employeePostData.address }}</b></h4>\n                                </div>\n                                \n                        </div>\n                    \n               \n                \n            <br>\n            <div class=\"text-center\">\n                <button class=\"btn btn-warning\" (click)=\"onPasswordChange(employeePostData.id)\">Change Password</button>\n                <button class=\"btn btn-success\" (click)=\"onView(employeePostData.id)\">View Attendance</button>\n                <button class=\"btn btn-danger\" (click)=\"logout()\">Logout</button>\n            </div>\n            <br><br>\n            </div>\n            </div>\n            <br>\n            <div class=\"card\">\n            <h4 class=\"card-header text-center text-white\" [hidden]=\"flag1\" style=\"background-color: #343a40!important;\">Checkin Your Attendance</h4>\n            <h4 class=\"card-header text-center text-white\" [hidden]=\"flag2\" style=\"background-color: #343a40!important;\">Checkout Your Attendance</h4>\n            <h4 class=\"card-header text-center text-white\" [hidden]=\"flag3\" style=\"background-color: #343a40!important;\">Done</h4>\n                <div class=\"card-body\">\n                        \n                        <br>\n                        <div class=\"row\" [hidden]=\"flag1\">\n                                <div class=\"col-md-4 text-center\">\n                                    <h4><b>Work Status:</b></h4>  \n                                </div> \n                                <div class=\"col-md-6\">\n                                    <select [(ngModel)]=\"work\" name=\"work\" class=\"form-control\">     \n                                            <option value=\"Present\">Present</option>\n                                            <option value=\"Work from home\">Work From Home</option>\n                                    </select>\n                                </div>\n                                <div class=\"col-md-2\"></div>\n                        </div>\n                        <div class=\"text-center\" [hidden]=\"flag2\"><h4>You have marked your Attendance & now you can checkout before 8:00 PM</h4></div>\n                        <div class=\"text-center\" [hidden]=\"flag3\"><h4>You have been marked for today.</h4></div>\n                        <br>            \n                        <div class=\"row\" [hidden]=\"flag1\">\n                            <div class=\"col-md-4 text-center\">\n                                <h4><b>Remark:</b></h4>  \n                            </div> \n                            <div class=\"col-md-6\">    \n                                <input class=\"form-control\" placeholder=\"Enter Your Remark\" type=\"text\" [(ngModel)]=\"remark\" name=\"remark\" required>\n                            </div>\n                            <div class=\"col-md-2\"></div>\n                        </div>\n                        <br>\n                        <div class=\"text-center\" [hidden]=\"flag1\">\n                          <button class=\"btn btn-success\" (click)=\"onCheckIn(employeePostData.id,remark,work)\">Mark Checkin</button>\n                        </div>\n                        <div class=\"text-center\" [hidden]=\"flag2\">\n                                <button class=\"btn btn-success\" (click)=\"onCheckOut(employeePostData.id)\">Mark Checkout</button>     \n                        </div>\n                        <br><br>\n            </div>\n            </div>\n            <br> \n             \n       \n</div>"

/***/ }),

/***/ "./src/app/components/employeehome/employeehome.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/employeehome/employeehome.component.ts ***!
  \*******************************************************************/
/*! exports provided: EmployeehomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeehomeComponent", function() { return EmployeehomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference types="googlemaps" />



var EmployeehomeComponent = /** @class */ (function () {
    function EmployeehomeComponent(dataService, router) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        this.flag1 = false;
        this.flag2 = true;
        this.flag3 = true;
        this.employeePostData = {
            id: "",
            lname: "",
            fname: "",
            dob: "",
            email: "",
            phone: "",
            address: ""
        };
        var token = JSON.parse(localStorage.getItem('isEmployee'));
        if (token == null) {
            this.router.navigateByUrl('/employee');
        }
        else if (token != null) {
            this.dataService.checkEmployeeLoggedIn(token.data).subscribe(function (signal) {
                if (signal.message == 'loginError' || signal.message == 'headerUndefined') {
                    localStorage.clear();
                    alert("Login Timeout");
                    _this.router.navigateByUrl('/employee');
                }
                else if (signal.message == undefined) {
                    _this.employeePostData = signal;
                    _this.dataService.attendanceCheckCompletetion(token.data, signal.id).subscribe(function (flag) {
                        console.log(flag);
                        if (flag.message == 'loginError' || flag.message == 'headerUndefined') {
                            localStorage.clear();
                            alert("Login Timeout");
                            _this.router.navigateByUrl('/employee');
                        }
                        else if (flag.message == 'fetchingError') {
                            alert("There is some error to fetch data");
                        }
                        else if (flag.message == "noEntry") {
                            _this.flag1 = false;
                            _this.flag2 = true;
                            _this.flag3 = true;
                        }
                        else if (flag.message == "checkedIn") {
                            _this.flag1 = true;
                            _this.flag2 = true;
                            _this.flag3 = false;
                        }
                        else if (flag.message == false) {
                            _this.flag1 = true;
                            _this.flag2 = false;
                            _this.flag3 = true;
                        }
                    });
                }
            });
        }
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                showPosition(position);
            }, function (error) {
                switch (error.code) {
                    case 1:
                        alert('Location Permission Denied');
                        break;
                    case 2:
                        alert('Location Position Unavailable');
                        break;
                    case 3:
                        alert('Location Timeout');
                        break;
                }
            });
        }
        function showPosition(position) {
            var latVar = 0.0;
            var lngVar = 0.0;
            latVar = position.coords.latitude;
            lngVar = position.coords.longitude;
            geocodeLatLng(latVar, lngVar);
        }
        function geocodeLatLng(latGet, lngGet) {
            var geocoder = new google.maps.Geocoder;
            var latlng = { lat: parseFloat(latGet), lng: parseFloat(lngGet) };
            geocoder.geocode({ 'location': latlng }, function (results, status) {
                if (results[0]) {
                    EmployeehomeComponent_1.locationPosition = results[0].formatted_address;
                }
                else {
                    window.alert('Geocoder failed due to: ' + status);
                }
            });
        }
    }
    EmployeehomeComponent_1 = EmployeehomeComponent;
    EmployeehomeComponent.prototype.ngOnInit = function () {
    };
    EmployeehomeComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigateByUrl('/employee');
    };
    EmployeehomeComponent.prototype.onView = function (empId) {
        this.router.navigate(['/employee/home', empId]);
    };
    EmployeehomeComponent.prototype.onPasswordChange = function (empId) {
        this.router.navigate(['employee/home/changePassword', empId]);
    };
    EmployeehomeComponent.prototype.onCheckIn = function (id, remark, work) {
        var _this = this;
        if (work != undefined) {
            if (work == "Work from home") {
                if (remark != undefined) {
                    if (EmployeehomeComponent_1.locationPosition != undefined) {
                        var token = JSON.parse(localStorage.getItem('isEmployee'));
                        this.dataService.attendanceCheckIn(id, remark, work, EmployeehomeComponent_1.locationPosition, token.data).subscribe(function (details) {
                            if (details.message == 'loginError' || details.message == 'headerUndefined') {
                                localStorage.clear();
                                alert("Login Timeout");
                                _this.router.navigateByUrl('/employee');
                            }
                            else if (details.message == 'fetchingError') {
                                alert('There is some error to fetch data');
                            }
                            else if (details.message == 'exist') {
                                alert('You have been marked already');
                            }
                            else if (details.message == true) {
                                _this.flag1 = details.message;
                                _this.flag2 = !details.message;
                            }
                        });
                    }
                    else {
                        alert("Please turn on your location Or Refresh your page");
                    }
                }
                else {
                    alert("Please enter remark if you are working from home");
                }
            }
            else {
                if (EmployeehomeComponent_1.locationPosition != undefined) {
                    var token = JSON.parse(localStorage.getItem('isEmployee'));
                    this.dataService.attendanceCheckIn(id, remark, work, EmployeehomeComponent_1.locationPosition, token.data).subscribe(function (details) {
                        if (details.message == 'loginError' || details.message == 'headerUndefined') {
                            localStorage.clear();
                            alert("Login Timeout");
                            _this.router.navigateByUrl('/employee');
                        }
                        else if (details.message == 'fetchingError') {
                            alert('There is some error to fetch data');
                        }
                        else if (details.message == 'exist') {
                            alert('You have been marked already');
                        }
                        else if (details.message == true) {
                            _this.flag1 = details.message;
                            _this.flag2 = !details.message;
                        }
                    });
                }
                else {
                    alert("Please turn on your location Or Refresh your page");
                }
            }
        }
        else {
            alert("Please enter work status");
        }
    };
    EmployeehomeComponent.prototype.onCheckOut = function (id) {
        var _this = this;
        if (EmployeehomeComponent_1.locationPosition != undefined) {
            var token = JSON.parse(localStorage.getItem('isEmployee'));
            this.dataService.attendanceCheckOut(token.data, id, EmployeehomeComponent_1.locationPosition).subscribe(function (flag) {
                if (flag.message == 'loginError' || flag.message == 'headerUndefined') {
                    localStorage.clear();
                    alert("Login Timeout");
                    _this.router.navigateByUrl('/employee');
                }
                else if (flag.message == 'fetchingError') {
                    alert('There is some error to fetch data');
                }
                else if (flag.message == true) {
                    _this.flag1 = flag.message;
                    _this.flag2 = flag.message;
                    _this.flag3 = !flag.message;
                }
            });
        }
        else {
            alert("Please turn on your location Or Refresh your page");
        }
    };
    EmployeehomeComponent = EmployeehomeComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employeehome',
            template: __webpack_require__(/*! ./employeehome.component.html */ "./src/app/components/employeehome/employeehome.component.html"),
            styles: [__webpack_require__(/*! ./employeehome.component.css */ "./src/app/components/employeehome/employeehome.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployeehomeComponent);
    return EmployeehomeComponent;
    var EmployeehomeComponent_1;
}());



/***/ }),

/***/ "./src/app/components/employeelogin/employeelogin.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/employeelogin/employeelogin.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/employeelogin/employeelogin.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/employeelogin/employeelogin.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <div class=\"col-md-8 col-md-offset-3\" style=\"margin: auto\">\n    <div class=\"card card-login mx-auto mt-5\">\n      <h4 class=\"card-header text-center text-white\" style=\"background-color: #343a40!important;\">Employee Login</h4>\n        <div class=\"card-body\">\n          <form class=\"text-center\" novalidate #f=\"ngForm\" (ngSubmit)=\"login(f)\">\n                <label for=\"username\"><b>Username</b></label>\n                <input type=\"text\" placeholder=\"Enter Username\" [(ngModel)]=\"employee.email\" name=\"email\"  class=\"form-control\"\n                #userName=\"ngModel\"\n                required\n                >\n                <div *ngIf=\"userName.errors?.required && userName.touched\" class=\"alert alert-danger\">Username is Required</div>\n                <label for=\"password\"><b>Password</b></label>\n                <input type=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"employee.password\" name=\"password\" class=\"form-control\"\n                  #Password=\"ngModel\"\n                  required\n                >\n              <div *ngIf=\"Password.errors?.required && Password.touched\" class=\"alert alert-danger\">Password is Required</div>\n              <br> \n              <button type=\"submit\" class=\"btn text-white\"  style=\"background-color: #563d7c;\">Login</button>\n          </form>\n          <br>\n        <div class=\"text-center\">\n            <a class=\"d-block small\" href=\"#\">Forgot Password?</a>\n        </div>\n        </div>\n    </div>\n   </div> \n</div>"

/***/ }),

/***/ "./src/app/components/employeelogin/employeelogin.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/employeelogin/employeelogin.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmployeeloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeloginComponent", function() { return EmployeeloginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeloginComponent = /** @class */ (function () {
    function EmployeeloginComponent(dataService, router) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        this.employee = {
            email: '',
            password: ''
        };
        var token = JSON.parse(localStorage.getItem('isEmployee'));
        if (token != null) {
            this.dataService.checkEmployeeLoggedIn(token.data).subscribe(function (signal) {
                if (signal.message != 'loginError' && signal.message != 'headerUndefined') {
                    _this.router.navigateByUrl('/employee/home');
                }
            });
        }
    }
    EmployeeloginComponent.prototype.ngOnInit = function () {
    };
    EmployeeloginComponent.prototype.login = function () {
        var _this = this;
        if (this.employee.email != '' && this.employee.password != '') {
            this.dataService.loginEmployee(this.employee).subscribe(function (tokenfromapi) {
                _this.token = tokenfromapi.data;
                if (tokenfromapi.message == 'noUser') {
                    alert("Your are not an employee of this company");
                }
                else if (tokenfromapi.message == 'wrongPassword') {
                    alert("Wrong Password");
                }
                else if (tokenfromapi.message == 'networkError') {
                    alert("There is network problem");
                }
                else if (_this.token != undefined) {
                    var employeeLink = {
                        "visibility": "hidden"
                    };
                    localStorage.clear();
                    localStorage.setItem('isEmployee', JSON.stringify(tokenfromapi));
                    localStorage.setItem('isEmployeeLink', JSON.stringify(employeeLink));
                    _this.router.navigateByUrl('/employee/home');
                }
            });
        }
        else {
            if (this.employee.email != '') {
                if (this.employee.password == '') {
                    alert('Please Enter Password');
                }
            }
            else if (this.employee.password != '') {
                if (this.employee.email == '') {
                    alert('Please Enter Your Email');
                }
            }
            else if (this.employee.email == '' && this.employee.password == '') {
                alert('Please Enter Email & Password');
            }
        }
    };
    EmployeeloginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employeelogin',
            template: __webpack_require__(/*! ./employeelogin.component.html */ "./src/app/components/employeelogin/employeelogin.component.html"),
            styles: [__webpack_require__(/*! ./employeelogin.component.css */ "./src/app/components/employeelogin/employeelogin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployeeloginComponent);
    return EmployeeloginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".use{\n  position: fixed;\n  background-color: #343a40!important;\n  width: 100%;\n  z-index: 1;\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"use navbar navbar-toggleable-md navbar-light rounded \">\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <a href=\"#\" routerLink=\"/\" class=\"logo-brand\">\n        <img src=\"https://www.kalpvaig.com/assets/img/corporate/logo.png\" alt=\"Kalpvaig Logo\">\n       </a>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link text-white\" href=\"#\" routerLink=\"/\">Home</a>\n              </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link text-white\" href=\"#\" [hidden]=\"exp_admin\" routerLink=\"/admin\">Admin Login</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link text-white\" href=\"#\" [hidden]=\"!exp_admin\" routerLink=\"/admin/home\">Admin's Dashboard</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link text-white\" href=\"#\" [hidden]=\"exp_employee\" routerLink=\"/employee\">Employee Login</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link text-white\" href=\"#\" [hidden]=\"!exp_employee\" routerLink=\"/employee/home\">Employee's Dashboard</a>\n            </li>\n        </ul>\n     \n      </div>\n</nav>\n<br><br><br><br>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        var adminLink = JSON.parse(localStorage.getItem('isAdminLink'));
        var employeeLink = JSON.parse(localStorage.getItem('isEmployeeLink'));
        if (adminLink != null) {
            if (adminLink.visibility == "hidden") {
                this.exp_admin = true;
            }
        }
        if (adminLink == null) {
            this.exp_admin = false;
        }
        if (employeeLink != null) {
            if (employeeLink.visibility == "hidden") {
                this.exp_employee = true;
            }
        }
        if (employeeLink == null) {
            this.exp_employee = false;
        }
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/new-employee/new-employee.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/new-employee/new-employee.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n    margin-left: 260px; /* Same as the width of the sidenav */\n    font-size: 16px; /* Increased text to enable scrolling */\n    padding: 0px 10px;\n}\n"

/***/ }),

/***/ "./src/app/components/new-employee/new-employee.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/new-employee/new-employee.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-admin-sidebar></app-admin-sidebar>\n<div class=\"main\">\n        <div class=\"col-md-12 col-md-offset-3\" style=\"margin: auto\">\n          <div class=\"card card-login mx-auto mt-5\">\n            <h4 class=\"card-header text-center text-white\" style=\"background-color: #343a40!important;\">New Employee Registration</h4>\n              <div class=\"card-body\">\n                    <form (submit)=\"onSubmit()\" class=\"text-center\">\n                     <div class=\"row\">\n                       <div class=\"col-md-1\"></div>   \n                       <div class=\"col-md-4\"> \n                        <div class=\"form-group\">\n                            <label><b>First Name</b></label>\n                            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employee.fname\" name=\"fname\" required>\n                        </div>\n                       </div>\n                       <div class=\"col-md-2\"></div>\n                       <div class=\"col-md-4\"> \n                            <div class=\"form-group\">\n                                <label><b>Last Name</b></label>\n                                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employee.lname\" name=\"lname\" required>\n                            </div>\n                       </div>\n                       <div class=\"col-md-1\"></div>\n                    </div>    \n                    <div class=\"row\">\n                       <div class=\"col-md-1\"></div>  \n                       <div class=\"col-md-4\"> \n                        <div class=\"form-group\">\n                            <label><b>Date of Birth</b></label>\n                            <input class=\"form-control\" type=\"date\" [(ngModel)]=\"employee.dob\" name=\"dob\" required>\n                        </div>\n                       </div>\n                       <div class=\"col-md-2\"></div>\n                       <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                                <label><b>Phone Number</b></label>\n                                <input class=\"form-control\" type=\"number\" [(ngModel)]=\"employee.phone\" name=\"phone\" required>\n                        </div>\n                      </div>\n                      <div class=\"col-md-1\"></div> \n                    </div>  \n                    <div class=\"row\">\n                       <div class=\"col-md-1\"></div> \n                       <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                                <label><b>Email Address</b></label>\n                                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employee.email\" name=\"email\" required>\n                            </div> \n                        </div>\n                       <div class=\"col-md-2\"></div> \n                       <div class=\"col-md-4\"> \n                        <div class=\"form-group\">\n                            <label><b>Address</b></label>\n                            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"employee.address\" name=\"address\" required>\n                        </div>\n                       </div>\n                    <div class=\"col-md-1\"></div>     \n                    </div>    \n                    <div class=\"row\">\n                       <div class=\"col-md-1\"></div> \n                       <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label><b>Password</b></label>\n                            <input class=\"form-control\" type=\"password\" [(ngModel)]=\"employee.password\" name=\"password\" required>\n                        </div>\n                       </div>\n                       <div class=\"col-md-2\"></div> \n                       <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label><b>Confirm Password</b></label>\n                            <input class=\"form-control\" type=\"password\" [(ngModel)]=\"temp.password\" name=\"password\" required>\n                        </div>\n                       </div>\n                       <div class=\"col-md-1\"></div>\n                    </div>   \n                        <input type=\"submit\" class=\"btn text-white\" style=\"background-color: #563d7c;\" value=\"Submit\">\n                    \n                    </form>\n            </div>\n            <br>\n        </div>\n    </div>\n </div>"

/***/ }),

/***/ "./src/app/components/new-employee/new-employee.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/new-employee/new-employee.component.ts ***!
  \*******************************************************************/
/*! exports provided: NewEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEmployeeComponent", function() { return NewEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewEmployeeComponent = /** @class */ (function () {
    function NewEmployeeComponent(dataService, router) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        this.employee = {
            email: '',
            fname: '',
            lname: '',
            dob: '',
            address: '',
            phone: '',
            password: ''
        };
        this.temp = {
            password: ''
        };
        var token = JSON.parse(localStorage.getItem('isAdmin'));
        if (token == null) {
            this.router.navigateByUrl('/admin');
        }
        else {
            this.dataService.getAdminDetails(token.data).subscribe(function (signal) {
                if (signal.message == 'loginError' || signal.message == 'headerUndefined') {
                    localStorage.clear();
                    alert("Login Timeout");
                    _this.router.navigateByUrl('/admin');
                }
            });
        }
    }
    NewEmployeeComponent.prototype.ngOnInit = function () {
    };
    NewEmployeeComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.employee.fname != '' && this.employee.lname != '' && this.employee.email != '' && this.employee.dob != '' && this.employee.address != '' && this.employee.password != '' && this.employee.phone != '' && this.temp.password != '') {
            var cpass = this.temp.password;
            if (this.employee.password == cpass) {
                var token = JSON.parse(localStorage.getItem('isAdmin'));
                this.dataService.addEmployee(this.employee, token.data).subscribe(function (employee) {
                    if (employee.message == true) {
                        alert("Employee Registered Successfully");
                        _this.router.navigateByUrl('/admin/home');
                    }
                    if (employee.message == "loginError" || employee.message == 'headerUndefined') {
                        localStorage.clear();
                        alert("Login Timeout");
                        _this.router.navigateByUrl('/admin');
                    }
                    if (employee.message == 'Failed to register') {
                        alert(employee.message);
                    }
                });
            }
            else {
                alert("mismatch confirm password");
            }
        }
        else {
            alert("Please Fill All Credentials First");
        }
    };
    NewEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-employee',
            template: __webpack_require__(/*! ./new-employee.component.html */ "./src/app/components/new-employee/new-employee.component.html"),
            styles: [__webpack_require__(/*! ./new-employee.component.css */ "./src/app/components/new-employee/new-employee.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewEmployeeComponent);
    return NewEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-navbar></app-navbar>\n    <h1 class=\"text-center\">Page Not Found</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/view-attendance-emp/view-attendance-emp.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/view-attendance-emp/view-attendance-emp.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/view-attendance-emp/view-attendance-emp.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/view-attendance-emp/view-attendance-emp.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">       \n            <div class=\"well\">\n                    <div class=\"card mb-4 use\">\n                            <div class=\"card-header text-center text-white\" style=\"background-color: #343a40!important;\">\n                              <i class=\"fas fa-table\"></i>\n                              <h4 [hidden]=\"!flag\" >Attendance History(Last 30 days)</h4>\n                              <h4 [hidden]=\"flag\" >Full Attendance History</h4>\n                    </div>\n                            <div class=\"card-body\">\n                              <div class=\"table-responsive text-center\">\n                                  <br>\n                                  <div class=\"text-center\">\n                                    <button class=\"btn btn-info\" (click)=\"fullHistory()\" [hidden]=\"!flag\">View Full Attendance</button>\n                                    <button class=\"btn btn-success\" (click)=\"monthHistory()\" [hidden]=\"flag\">View Lastest Attendance</button>\n                                  </div>\n                                  <br>\n                                <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n                                  <thead>\n                                    <tr>\n                                        <th class=\"text-center\">Date(yyyy/mm/dd)</th>\n                                        <th class=\"text-center\">Check In Time(hh/mm/ss)</th>\n                                        <th class=\"text-center\">Check Out Time(hh/mm/ss)</th>\n                                        <th class=\"text-center\">Status</th>\n                                        <th class=\"text-center\">Remark</th>\n                                        \n                                    </tr>\n                                  </thead>\n                                  <tfoot>\n                                    <tr>\n                                        <th class=\"text-center\">Date(yyyy/mm/dd)</th>\n                                        <th class=\"text-center\">Check In Time(hh/mm/ss)</th>\n                                        <th class=\"text-center\">Check Out Time(hh/mm/ss)</th>\n                                        <th class=\"text-center\">Status</th>\n                                        <th class=\"text-center\">Remark</th>\n                                      \n                                    </tr>\n                                  </tfoot>\n                                  \n                                  <tbody>\n                                    <tr *ngFor=\"let attendance of attendances | slice:0:30\" [hidden]=\"!flag\">\n                                        <td><br><b class=\"text-info\">{{ attendance.checkInDate }}</b></td>\n                                        <td><b class=\"text-info\">{{attendance.checkInTime}}</b><br><b>At</b><br><b class=\"text-success\">{{attendance.checkInLocation}}</b></td>\n                                        <td><b class=\"text-info\">{{attendance.checkOutTime}}</b><br><b>At</b><br><b class=\"text-success\">{{attendance.checkOutLocation}}</b></td>\n                                        <td [hidden]=\"!(attendance.status == 'Present')\"><br><b class=\"text-success\">{{ attendance.status }}</b></td>\n                                        <td [hidden]=\"!(attendance.status == 'Work from home')\"><br><b class=\"text-warning\">{{ attendance.status }}</b></td>\n                                        <td [hidden]=\"!(attendance.status == 'Absent')\"><br><b class=\"text-danger\">{{ attendance.status }}</b></td>     \n                                        <td class=\"text-info\"><br>{{ attendance.remark }}</td>\n                                    </tr>\n                                    <tr *ngFor=\"let attendance of attendances\" [hidden]=\"flag\">\n                                        <td><br><b class=\"text-info\">{{ attendance.checkInDate }}</b></td>\n                                        <td><b class=\"text-info\">{{attendance.checkInTime}}</b><br><b>At</b><br><b class=\"text-success\">{{attendance.checkInLocation}}</b></td>\n                                        <td><b class=\"text-info\">{{attendance.checkOutTime}}</b><br><b>At</b><br><b class=\"text-success\">{{attendance.checkOutLocation}}</b></td>\n                                        <td [hidden]=\"!(attendance.status == 'Present')\"><br><b class=\"text-success\">{{ attendance.status }}</b></td>\n                                        <td [hidden]=\"!(attendance.status == 'Work from home')\"><br><b class=\"text-warning\">{{ attendance.status }}</b></td>\n                                        <td [hidden]=\"!(attendance.status == 'Absent')\"><br><b class=\"text-danger\">{{ attendance.status }}</b></td>     \n                                        <td class=\"text-info\"><br>{{ attendance.remark }}</td>\n                                    </tr>\n                                  </tbody>\n                              </table>\n                        </div>\n                        </div>\n                        </div>\n                \n                \n            </div>\n        \n        </div>"

/***/ }),

/***/ "./src/app/components/view-attendance-emp/view-attendance-emp.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/view-attendance-emp/view-attendance-emp.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ViewAttendanceEmpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAttendanceEmpComponent", function() { return ViewAttendanceEmpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewAttendanceEmpComponent = /** @class */ (function () {
    function ViewAttendanceEmpComponent(dataService, router, route) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.flag = true;
        var token = JSON.parse(localStorage.getItem('isEmployee'));
        if (token == null) {
            this.router.navigateByUrl('/employee');
        }
        else if (token != null) {
            this.dataService.checkEmployeeLoggedIn(token.data).subscribe(function (signal) {
                if (signal.message == 'loginError' || signal.message == 'headerUndefined') {
                    localStorage.clear();
                    alert("Login Timeout");
                    _this.router.navigateByUrl('/employee');
                }
                else if (signal.message == undefined) {
                    _this.route.params.subscribe(function (params) {
                        _this.dataService.viewEmployeeAttendance(token.data, params.empId).subscribe(function (attendance) {
                            if (attendance.message == 'loginError' || attendance.message == 'headerUndefined') {
                                localStorage.clear();
                                alert("Login Timeout");
                                _this.router.navigateByUrl('/employee');
                            }
                            else if (attendance.message == 'fetchingError') {
                                alert("No Attendance Found");
                                _this.router.navigateByUrl('/employee/home');
                            }
                            else if (attendance.message == undefined) {
                                _this.attendances = attendance.reverse();
                            }
                        });
                    });
                }
            });
        }
    }
    ViewAttendanceEmpComponent.prototype.ngOnInit = function () {
    };
    ViewAttendanceEmpComponent.prototype.fullHistory = function () {
        this.flag = false;
    };
    ViewAttendanceEmpComponent.prototype.monthHistory = function () {
        this.flag = true;
    };
    ViewAttendanceEmpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-attendance-emp',
            template: __webpack_require__(/*! ./view-attendance-emp.component.html */ "./src/app/components/view-attendance-emp/view-attendance-emp.component.html"),
            styles: [__webpack_require__(/*! ./view-attendance-emp.component.css */ "./src/app/components/view-attendance-emp/view-attendance-emp.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ViewAttendanceEmpComponent);
    return ViewAttendanceEmpComponent;
}());



/***/ }),

/***/ "./src/app/components/view-attendance/view-attendance.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/view-attendance/view-attendance.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.main {\n    margin-left: 260px; /* Same as the width of the sidenav */\n    font-size: 16px; /* Increased text to enable scrolling */\n    padding: 0px 10px;\n}\n\n"

/***/ }),

/***/ "./src/app/components/view-attendance/view-attendance.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/view-attendance/view-attendance.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-admin-sidebar></app-admin-sidebar>\n\n<div class=\"main\">       \n            <div class=\"well\">\n                <div class=\"card\">\n                    <h4 class=\"card-header text-center text-white\" style=\"background-color: #343a40!important;\">Details</h4>\n                    <div class=\"card-body\">\n                            <div class=\"row\">\n                                    <div class=\"col-md-2\"></div>                            \n                                    <div class=\"col-md-4\">\n                                        <h4><b>Name:</b></h4>  \n                                    </div> \n                                    <div class=\"col-md-6\">\n                                            <h4><b>{{ employeePostData.fname }} {{ employeePostData.lname }}</b></h4>\n                                    </div>\n                            </div>\n\n                            <br>\n                            <div class=\"row\">\n                                    <div class=\"col-md-2\"></div>\n                                    <div class=\"col-md-4\">\n                                        <h4><b>Email:</b></h4>  \n                                    </div> \n                                    <div class=\"col-md-6\">\n                                            <h4><b>{{ employeePostData.email }}</b></h4>\n                                    </div>\n                                    \n                            </div>\n                   </div> \n                  </div>         \n                   <br>\n                   <div class=\"text-center\">\n                     <button class=\"btn btn-info\" (click)=\"fullHistory()\" [hidden]=\"!flag\">View Full Attendance</button>\n                     <button class=\"btn btn-success\" (click)=\"monthHistory()\" [hidden]=\"flag\">View Lastest Attendance</button>\n                   </div>\n                   <br>\n                   <div class=\"card mb-4 use\">\n                            <div class=\"card-header text-center text-white\" style=\"background-color: #343a40!important;\">\n                              <i class=\"fas fa-table\"></i>\n                              <h4 [hidden]=\"!flag\" >Attendance History(Last 30 days)</h4>\n                              <h4 [hidden]=\"flag\" >Full Attendance History</h4>\n                    </div>\n                            <div class=\"card-body\">\n                              <div class=\"table-responsive\">\n                                <table class=\"table table-bordered text-center\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n                                  <thead>\n                                    <tr>\n                                        <th class=\"text-center\">Date(yyyy/mm/dd)</th>\n                                        <th class=\"text-center\">Check In Time(hh/mm/ss)</th>\n                                        <th class=\"text-center\">Check Out Time(hh/mm/ss)</th>\n                                        <th class=\"text-center\">Status</th>\n                                        <th class=\"text-center\">Remark</th>\n                                        <th class=\"text-center\">Action</th>\n                                    </tr>\n                                  </thead>\n                                  <tfoot>\n                                    <tr>\n                                      <th class=\"text-center\">Date(yyyy/mm/dd)</th>\n                                      <th class=\"text-center\">Check In Time(hh/mm/ss)</th>\n                                      <th class=\"text-center\">Check Out Time(hh/mm/ss)</th>\n                                      <th class=\"text-center\">Status</th>\n                                      <th class=\"text-center\">Remark</th>\n                                      <th class=\"text-center\">Action</th>\n                                    </tr>\n                                  </tfoot>\n                                  \n                                  <tbody>\n                                    <tr *ngFor=\"let attendance of attendances\" [hidden]=\"flag\">\n                                        <td><br><b class=\"text-info\">{{ attendance.checkInDate }}</b></td>\n                                        <td><b class=\"text-info\">{{attendance.checkInTime}}</b><br><b>At</b><br><b class=\"text-success\">{{attendance.checkInLocation}}</b></td>\n                                        <td><b class=\"text-info\">{{attendance.checkOutTime}}</b><br><b>At</b><br><b class=\"text-success\">{{attendance.checkOutLocation}}</b></td>\n                                        <td [hidden]=\"!(attendance.status == 'Present')\"><br><b class=\"text-success\">{{ attendance.status }}</b></td>\n                                        <td [hidden]=\"!(attendance.status == 'Work from home')\"><br><b class=\"text-warning\">{{ attendance.status }}</b></td>\n                                        <td [hidden]=\"!(attendance.status == 'Absent')\"><br><b class=\"text-danger\">{{ attendance.status }}</b></td>\n                                        <td class=\"text-info\"><br>{{ attendance.remark }}</td>\n                                        <td>\n                                            <br>\n                                            <button class=\"btn btn-success btn-sm btn-block\" (click)=\"onEditClick(attendance._id)\">Edit Attendance</button>     \n                                       </td>\n                                    </tr>\n                                    <tr *ngFor=\"let attendance of attendances | slice:0:30\" [hidden]=\"!flag\">\n                                      <td><br><b class=\"text-info\">{{ attendance.checkInDate }}</b></td>\n                                      <td><b class=\"text-info\">{{attendance.checkInTime}}</b><br><b>At</b><br><b class=\"text-success\">{{attendance.checkInLocation}}</b></td>\n                                      <td><b class=\"text-info\">{{attendance.checkOutTime}}</b><br><b>At</b><br><b class=\"text-success\">{{attendance.checkOutLocation}}</b></td>\n                                      <td [hidden]=\"!(attendance.status == 'Present')\"><br><b class=\"text-success\">{{ attendance.status }}</b></td>\n                                      <td [hidden]=\"!(attendance.status == 'Work from home')\"><br><b class=\"text-warning\">{{ attendance.status }}</b></td>\n                                      <td [hidden]=\"!(attendance.status == 'Absent')\"><br><b class=\"text-danger\">{{ attendance.status }}</b></td>\n                                      <td class=\"text-info\"><br>{{ attendance.remark }}</td>\n                                      <td>\n                                          <br>\n                                          <button class=\"btn btn-success btn-sm btn-block\" (click)=\"onEditClick(attendance._id)\">Edit Attendance</button>     \n                                     </td>\n                                    </tr>\n                                  </tbody>\n                              </table>\n                        </div>\n                        </div>\n                        </div>\n                \n                \n            </div>\n        \n        </div>\n     "

/***/ }),

/***/ "./src/app/components/view-attendance/view-attendance.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/view-attendance/view-attendance.component.ts ***!
  \*************************************************************************/
/*! exports provided: ViewAttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAttendanceComponent", function() { return ViewAttendanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewAttendanceComponent = /** @class */ (function () {
    function ViewAttendanceComponent(dataService, router, route) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.flag = true;
        this.value = "let attendance of attendances | slice:0:30";
        this.employeePostData = {
            id: "",
            lname: "",
            fname: "",
            dob: "",
            email: "",
            phone: "",
            address: ""
        };
        var token = JSON.parse(localStorage.getItem('isAdmin'));
        if (token == null) {
            this.router.navigateByUrl('/admin');
        }
        else if (token != null) {
            this.dataService.getAdminDetails(token.data).subscribe(function (signal) {
                if (signal.message == 'loginError' || signal.message == 'headerUndefined') {
                    localStorage.clear();
                    alert("Login Timeout");
                    _this.router.navigateByUrl('/admin');
                }
                else if (signal.message == undefined) {
                    _this.route.params.subscribe(function (params) {
                        _this.dataService.viewEmployeeAttendance(token.data, params.empId).subscribe(function (attendance) {
                            if (attendance.message == 'loginError' || attendance.message == 'headerUndefined') {
                                localStorage.clear();
                                alert("Login Timeout");
                                _this.router.navigateByUrl('/admin');
                            }
                            else if (attendance.message == 'fetchingError') {
                                alert("No Attendance Found");
                            }
                            else if (attendance.message == undefined) {
                                _this.attendances = attendance.reverse();
                            }
                        });
                        _this.dataService.getEmployeeToEdit(token.data, params.empId).subscribe(function (employeeDetails) {
                            if (employeeDetails.message == "loginError" || employeeDetails.message == "headerUndefined") {
                                localStorage.clear();
                                alert("Login Timeout");
                                _this.router.navigateByUrl('/admin');
                            }
                            else if (employeeDetails.message == "fetchingError") {
                                alert("There is a problem to fetch details");
                                _this.router.navigateByUrl('/admin/home');
                            }
                            else if (employeeDetails.message == 'No Such Employee Exists') {
                                alert('No Such Employee Exists');
                                _this.router.navigateByUrl('/admin/home');
                            }
                            else if (employeeDetails.message == undefined) {
                                _this.employeePostData = employeeDetails;
                            }
                        });
                    });
                }
            });
        }
    }
    ViewAttendanceComponent.prototype.ngOnInit = function () {
    };
    ViewAttendanceComponent.prototype.onEditClick = function (id) {
        this.router.navigate(['admin/home/viewAttendance/editAttendance', id]);
    };
    ViewAttendanceComponent.prototype.fullHistory = function () {
        this.flag = false;
    };
    ViewAttendanceComponent.prototype.monthHistory = function () {
        this.flag = true;
    };
    ViewAttendanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-attendance',
            template: __webpack_require__(/*! ./view-attendance.component.html */ "./src/app/components/view-attendance/view-attendance.component.html"),
            styles: [__webpack_require__(/*! ./view-attendance.component.css */ "./src/app/components/view-attendance/view-attendance.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ViewAttendanceComponent);
    return ViewAttendanceComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.rootUrl = '';
    }
    //admin works
    DataService.prototype.loginAdmin = function (admin) {
        return this.http.post(this.rootUrl + 'api/admin_login', admin)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    DataService.prototype.getAdminDetails = function (token) {
        var apiUrl = this.rootUrl + 'api/admin_details';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        });
        return this.http.get(apiUrl, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    DataService.prototype.checkAdminLoggedIn = function (token) {
        var apiUrl = this.rootUrl + 'api/admin_check';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        });
        return this.http.get(apiUrl, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    DataService.prototype.deleteEmployee = function (id, token) {
        var del_id = { 'id': id };
        var apiUrl = this.rootUrl + 'api/delete_employee';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        });
        return this.http.post(apiUrl, del_id, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    DataService.prototype.addEmployee = function (employee, token) {
        var apiUrl = this.rootUrl + 'api/employee_register';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        });
        return this.http.post(apiUrl, employee, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    DataService.prototype.getEmployeeToEdit = function (token, empId) {
        var body = { empId: empId };
        var apiUrl = this.rootUrl + 'api/getEmployeeToEdit';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        });
        return this.http.post(apiUrl, body, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    DataService.prototype.updateEmployee = function (employee, token) {
        var apiUrl = this.rootUrl + 'api/employee_update';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        });
        return this.http.post(apiUrl, employee, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    DataService.prototype.viewEmployeeAttendance = function (token, empId) {
        var body = { empId: empId };
        var apiUrl = this.rootUrl + 'api/viewEmployeeAttendance';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        });
        return this.http.post(apiUrl, body, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    DataService.prototype.getAttendance = function (token, id) {
        var body = { id: id };
        var apiUrl = this.rootUrl + 'api/getAttendance';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        });
        return this.http.post(apiUrl, body, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    DataService.prototype.editAttendance = function (token, data) {
        var apiUrl = this.rootUrl + 'api/editAttendance';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        });
        return this.http.post(apiUrl, data, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    //employee works
    DataService.prototype.loginEmployee = function (employee) {
        return this.http.post(this.rootUrl + 'api/employee_login', employee)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    DataService.prototype.checkPsdAdmin = function (token, id) {
        var body = { _id: id };
        var apiUrl = this.rootUrl + 'api/checkPsdAdmin';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        });
        return this.http.post(apiUrl, body, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    DataService.prototype.checkPsdEmployee = function (token, id) {
        var body = { _id: id };
        var apiUrl = this.rootUrl + 'api/checkPsdEmployee';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        });
        return this.http.post(apiUrl, body, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    DataService.prototype.checkEmployeeLoggedIn = function (token) {
        var apiUrl = this.rootUrl + 'api/employee_check';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        });
        return this.http.get(apiUrl, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    DataService.prototype.attendanceCheckIn = function (id, remark, status, location, token) {
        var body = { 'id': id, 'remark': remark, 'status': status, 'location': location };
        var apiUrl = this.rootUrl + 'api/attendanceCheckIn';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        });
        return this.http.post(apiUrl, body, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    DataService.prototype.attendanceCheckOut = function (token, id, location) {
        var body = { empId: id, location: location };
        var apiUrl = this.rootUrl + 'api/attendanceCheckOut';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        });
        return this.http.post(apiUrl, body, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    DataService.prototype.attendanceCheckCompletetion = function (token, id) {
        var body = { empId: id };
        var apiUrl = this.rootUrl + 'api/attendanceCheckCompletetion';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        });
        return this.http.post(apiUrl, body, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    DataService.prototype.changePassword = function (token, data) {
        var apiUrl = this.rootUrl + 'api/changepwd';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        });
        return this.http.post(apiUrl, data, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\Employee_Attendance\public\employee\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map