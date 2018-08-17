import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})

export class AdminHomeComponent implements OnInit {
  employees:any[];
  constructor(private dataService:DataService, private router:Router) {
    const token = JSON.parse(localStorage.getItem('isAdmin'));
    if(token == null){
      this.router.navigateByUrl('/admin',);
    }
    
    else if(token != null){
      this.dataService.getAdminDetails(token.data).subscribe(signal=>{
        if(signal.message == 'loginError' || signal.message == 'headerUndefined'){
          localStorage.clear();
          alert("Login Timeout");
          this.router.navigateByUrl('/admin'); 
        }
  
        else if(signal.message == undefined){
          this.dataService.checkAdminLoggedIn(token.data).subscribe(employees=>{
              if(employees.message != undefined){
                alert(employees.message);
              }
              this.employees = employees;
          });
        }      
      });
    }
   }

  ngOnInit() {
  }

  onDeleteClick(id){
    var result = confirm("Are you sure to delete this employee data forever?");
  if(result){
    const token = JSON.parse(localStorage.getItem('isAdmin'));
    this.dataService.deleteEmployee(id, token.data).subscribe(res =>{
      if(res.message == 'loginError' || res.message == 'headerUndefined'){
        localStorage.clear();
        alert("Login Timeout");
        this.router.navigateByUrl('/admin',); 
      }
      else if(res.message == "fetchingError"){
        alert("There is an error in fetching data")
      }
      else if(res.message == true){
      for(let i = 0;i < this.employees.length;i++){
        if(this.employees[i]._id == id){
            this.employees.splice(i,1);
          }
      }
    }
    });
  }  
  }



  onViewClick(empId){
    this.router.navigate(['admin/home/viewAttendance',empId]);
    
  }
  
  onEditClick(employee){
    this.router.navigate(['admin/home/editEmployee',employee._id]); 
  }
}
