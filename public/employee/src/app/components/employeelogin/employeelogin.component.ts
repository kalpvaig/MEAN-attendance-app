import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {
  token:any;
  employee ={
    email:'',
    password:''
  }
  constructor(private dataService:DataService, private router:Router) { 
    const token = JSON.parse(localStorage.getItem('isEmployee'));
    if(token != null){
      this.dataService.checkEmployeeLoggedIn(token.data).subscribe(signal=>{
        if(signal.message != 'loginError' && signal.message != 'headerUndefined'){
          this.router.navigateByUrl('/employee/home');
        }
      });
  }
  }

  ngOnInit() {
  }

  login(){
   
    if(this.employee.email!='' && this.employee.password !=''){
      this.dataService.loginEmployee(this.employee).subscribe(tokenfromapi =>{
        this.token = tokenfromapi.data;
        if(tokenfromapi.message == 'noUser'){
          alert("Your are not an employee of this company");
          
        }
        else if(tokenfromapi.message == 'wrongPassword'){
          alert("Wrong Password");
          
        }
        else if(tokenfromapi.message == 'networkError'){
          alert("There is network problem");
          
        }

        else if(this.token != undefined){
            var employeeLink = {
              "visibility":"hidden"
            } 
            localStorage.clear();
            localStorage.setItem('isEmployee',JSON.stringify(tokenfromapi));
            localStorage.setItem('isEmployeeLink',JSON.stringify(employeeLink));
            this.router.navigateByUrl('/employee/home');
        }
        
      });
   }
   else{
     if(this.employee.email !=''){
       if(this.employee.password ==''){
         alert('Please Enter Password');
       }
     }
     else if(this.employee.password !=''){
       if(this.employee.email ==''){
        alert('Please Enter Your Email');
       }
     }
     else if(this.employee.email =='' && this.employee.password == ''){
       alert('Please Enter Email & Password');
     }
   }
  }

}
