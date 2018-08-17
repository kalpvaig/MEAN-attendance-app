import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.css']
})
export class ViewAttendanceComponent implements OnInit {
  flag:any= true;
  value:String="let attendance of attendances | slice:0:30";
  attendances:any[];
  employeePostData = {
    id: "",
    lname: "",
    fname:"",
    dob: "",
    email: "",
    phone: "",
    address: ""                                         
  };
  constructor(private dataService:DataService, private router:Router, private route :ActivatedRoute) {
    const token = JSON.parse(localStorage.getItem('isAdmin'));
    if(token == null){
      this.router.navigateByUrl('/admin',);
    }
    else if(token != null){
      this.dataService.getAdminDetails(token.data).subscribe(signal=>{
        if(signal.message == 'loginError' || signal.message == 'headerUndefined'){
          localStorage.clear();
          alert("Login Timeout");
          this.router.navigateByUrl('/admin',); 
        }
  
        else if(signal.message == undefined){
           this.route.params.subscribe( params =>{
            this.dataService.viewEmployeeAttendance(token.data, params.empId).subscribe(attendance=>{
              if(attendance.message == 'loginError' || attendance.message == 'headerUndefined'){
                localStorage.clear();
                alert("Login Timeout");
                this.router.navigateByUrl('/admin',); 
              }
              else if(attendance.message == 'fetchingError'){
                alert("No Attendance Found");
              }
              else if(attendance.message == undefined){
                this.attendances = attendance.reverse();
              }
            });
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
                    this.employeePostData = employeeDetails;
                  }
               
            });
          });
          
        }      
      });
    }
    
   }

  ngOnInit() {
  }

  onEditClick(id){
    this.router.navigate(['admin/home/viewAttendance/editAttendance',id]);
  }
  fullHistory(){
    this.flag = false;
  }
  monthHistory(){
    this.flag = true;
  }

}
