import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-view-attendance-emp',
  templateUrl: './view-attendance-emp.component.html',
  styleUrls: ['./view-attendance-emp.component.css']
})
export class ViewAttendanceEmpComponent implements OnInit {
  flag:any= true;
  attendances:any[];
  constructor(private dataService:DataService, private router:Router, private route :ActivatedRoute) {
    const token = JSON.parse(localStorage.getItem('isEmployee'));
    if(token == null){
      this.router.navigateByUrl('/employee',);
    }
    else if(token != null){
      this.dataService.checkEmployeeLoggedIn(token.data).subscribe(signal=>{
        if(signal.message == 'loginError' || signal.message == 'headerUndefined'){
          localStorage.clear();
          alert("Login Timeout");
          this.router.navigateByUrl('/employee'); 
        }
        else if(signal.message == undefined){
          this.route.params.subscribe( params =>{
            this.dataService.viewEmployeeAttendance(token.data, params.empId).subscribe(attendance=>{
    
              if(attendance.message == 'loginError' || attendance.message == 'headerUndefined'){
                localStorage.clear();
                alert("Login Timeout");
                this.router.navigateByUrl('/employee'); 
              }
              else if(attendance.message == 'fetchingError'){
                alert("No Attendance Found");
                this.router.navigateByUrl('/employee/home');
              }
              else if(attendance.message == undefined){
                this.attendances = attendance.reverse();
              }
            });
          });
        }
      });
    }
   
   }

  ngOnInit() {
  }
  fullHistory(){
    this.flag = false;
  }
  monthHistory(){
    this.flag = true;
  }
}
