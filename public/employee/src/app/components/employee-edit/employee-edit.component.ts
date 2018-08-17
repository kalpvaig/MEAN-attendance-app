import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  empId :any;
  employee={
    id:'',
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
  constructor(private dataService:DataService, private router:Router, private route :ActivatedRoute) { 
    const token = JSON.parse(localStorage.getItem('isAdmin'));
    if(token == null){
      this.router.navigateByUrl('/admin');
    }
    else{
      this.dataService.getAdminDetails(token.data).subscribe(signal=>{
        if(signal.message == 'loginError' || signal.message == 'headerUndefined'){
          localStorage.clear();
          alert("Login Timeout");
          this.router.navigateByUrl('/admin'); 
        }
  
        else{
          this.route.params.subscribe( params =>{ 
            this.dataService.getEmployeeToEdit(token.data, params.empId).subscribe(employeeDetails=>{
              
              if(employeeDetails.message == "loginError" || employeeDetails.message == "headerUndefined"){
                localStorage.clear();
                alert("Login Timeout");
                this.router.navigateByUrl('/admin');
              }
              else if(employeeDetails.message == "fetchingError"){
                alert("There is a problem to fetch details");
                this.router.navigateByUrl('/admin/home');
              }
              else if(employeeDetails.message =='No Such Employee Exists'){
                alert('No Such Employee Exists');
                this.router.navigateByUrl('/admin/home');
              }
              else if(employeeDetails.message == undefined){
                  this.employee.id = employeeDetails._id;
                  this.employee.fname = employeeDetails.fname;
                  this.employee.lname = employeeDetails.lname;
                  this.employee.email = employeeDetails.email;
                  this.employee.dob = employeeDetails.dob;
                  this.employee.phone = employeeDetails.phone; 
                  this.employee.address = employeeDetails.address;
                  }
            });
           });   
        }      
      });
    }
      
    }
  
  ngOnInit() {
  }

  onUpdate(){
    if(this.employee.fname !='' && this.employee.lname !='' && this.employee.email !='' && this.employee.dob !='' && this.employee.address !=''){
        var cpass = this.temp.password;
        if(this.employee.password == cpass){
          const token = JSON.parse(localStorage.getItem('isAdmin'));
          this.dataService.updateEmployee(this.employee, token.data).subscribe(employee =>{
          if(employee.message == true){
            alert('Employee update process is successfully done')
            this.router.navigateByUrl('/admin/home');
          } 
          if(employee.message == 'loginError' || employee.message == 'headerUndefined'){
            localStorage.clear();
            alert("Login Timeout");
            this.router.navigateByUrl('/admin'); 
          } 
          if(employee.message == 'fetchingError' || employee.message == 'Failed to update employee' ||employee.message == 'No Such Employee Exists' ){
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
