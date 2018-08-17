import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  employee={
    email:'',
    fname:'',
    lname:'',
    dob:'',
    address:'',
    phone:'',
    password:''
  }
  temp={
    password:''
  }
  constructor(public dataService:DataService, private router: Router) {
    const token = JSON.parse(localStorage.getItem('isAdmin'));
    if(token == null){
      this.router.navigateByUrl('/admin');
    }
    else{
      this.dataService.getAdminDetails(token.data).subscribe(signal=>{
        
        if(signal.message == 'loginError' || signal.message == 'headerUndefined'){
          localStorage.clear();
          alert("Login Timeout");
          this.router.navigateByUrl('/admin',); 
        }
     
      });
    }
   }

  ngOnInit() {
  }
  
  onSubmit(){
    if(this.employee.fname !='' && this.employee.lname !='' && this.employee.email !='' && this.employee.dob !='' && this.employee.address !='' && this.employee.password !='' && this.employee.phone !='' && this.temp.password !=''){
        var cpass = this.temp.password;
        if(this.employee.password == cpass){
          const token = JSON.parse(localStorage.getItem('isAdmin'));
          this.dataService.addEmployee(this.employee, token.data).subscribe(employee =>{
            if(employee.message == true){
              alert("Employee Registered Successfully")             
              this.router.navigateByUrl('/admin/home');
            } 
            if(employee.message == "loginError" || employee.message == 'headerUndefined'){
              localStorage.clear();
              alert("Login Timeout");
              this.router.navigateByUrl('/admin',);
            }
            if(employee.message =='Failed to register'){
              alert(employee.message);
            }

          });
        }
        else{
          alert("mismatch confirm password");
        }
    } 
    else{
      alert("Please Fill All Credentials First");
    }   
  }
}
