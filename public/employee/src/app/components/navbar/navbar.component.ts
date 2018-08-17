import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  exp_admin :any;
  exp_employee :any;
  constructor() {
    const adminLink = JSON.parse(localStorage.getItem('isAdminLink'));
    const employeeLink = JSON.parse(localStorage.getItem('isEmployeeLink'));
    if(adminLink != null){
      if(adminLink.visibility == "hidden"){
       this.exp_admin = true;
      }
    }
    if(adminLink == null){
      this.exp_admin = false;
    }
    if(employeeLink != null){
      if(employeeLink.visibility == "hidden"){
       this.exp_employee = true;
      }
    }
    if(employeeLink == null){
      this.exp_employee = false;
    }
    
  }

  ngOnInit() {
  }

}
