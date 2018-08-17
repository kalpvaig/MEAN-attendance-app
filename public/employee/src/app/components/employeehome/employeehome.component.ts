/// <reference types="googlemaps" />
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employeehome',
  templateUrl: './employeehome.component.html',
  styleUrls: ['./employeehome.component.css']
})

export class EmployeehomeComponent implements OnInit {
  flag1: boolean = false;
  flag2: boolean = true;
  flag3: boolean = true;
  work: any;
  remark: any;
  static locationPosition : any;
  employeePostData = {
    id: "",
    lname: "",
    fname:"",
    dob: "",
    email: "",
    phone: "",
    address: ""                                         
  };

   constructor(private dataService: DataService, private router: Router) {
    const token = JSON.parse(localStorage.getItem('isEmployee'));
    if(token == null){
      this.router.navigateByUrl('/employee');
    }
    else if(token != null){
      this.dataService.checkEmployeeLoggedIn(token.data).subscribe(signal=>{
        if(signal.message == 'loginError' || signal.message == 'headerUndefined'){
          localStorage.clear();
          alert("Login Timeout");
          this.router.navigateByUrl('/employee'); 
        }
  
        else if(signal.message == undefined){
          this.employeePostData = signal;
          this.dataService.attendanceCheckCompletetion(token.data, signal.id).subscribe(flag=>{
            console.log(flag);
            if(flag.message == 'loginError' || flag.message == 'headerUndefined'){
              localStorage.clear();
              alert("Login Timeout");
              this.router.navigateByUrl('/employee');
            }
            else if(flag.message == 'fetchingError'){
              alert("There is some error to fetch data");
            }
            else if(flag.message == "noEntry"){
              this.flag1 = false;
              this.flag2 = true;  
              this.flag3 = true;
    
            }
            else if(flag.message == "checkedIn"){
              this.flag1 = true;
              this.flag2 = true;  
              this.flag3 = false; 
            }
            else if(flag.message == false){
              this.flag1 = true;
              this.flag2 = false;  
              this.flag3 = true;
            }  
         });
        }      
      });
    }
     

    
  
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
          position => {
            showPosition(position);               
          },
          error => {
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
          }
      );
  }

  function showPosition(position) {
    var latVar=0.0;
    var lngVar=0.0;
  
      latVar = position.coords.latitude ; 
      lngVar =  position.coords.longitude;
      geocodeLatLng(latVar,lngVar);
  
  }
    
  function geocodeLatLng(latGet, lngGet) {
      var geocoder = new google.maps.Geocoder;
      var latlng = {lat: parseFloat(latGet), lng: parseFloat(lngGet)};
      geocoder.geocode({'location': latlng}, function(results, status) {
        
          if (results[0]) {
               
             EmployeehomeComponent.locationPosition = results[0].formatted_address;
          } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      });
        
    }
  }

  ngOnInit() { 
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/employee');   
  }

  onView(empId){
    this.router.navigate(['/employee/home',empId]);
  }
  onPasswordChange(empId){
    this.router.navigate(['employee/home/changePassword',empId]);
  }
  
  onCheckIn(id, remark, work){
    if(work != undefined){
      if(work == "Work from home"){
        if(remark != undefined){
          if(EmployeehomeComponent.locationPosition != undefined){
            const token = JSON.parse(localStorage.getItem('isEmployee'));
            this.dataService.attendanceCheckIn(id, remark, work,EmployeehomeComponent.locationPosition,token.data).subscribe(details =>{
                
                if(details.message == 'loginError' || details.message == 'headerUndefined'){
                  localStorage.clear();
                  alert("Login Timeout");
                  this.router.navigateByUrl('/employee');
                }
                else if(details.message == 'fetchingError'){
                  alert('There is some error to fetch data');
                }
                else if(details.message == 'exist'){
                  alert('You have been marked already');
                }
                else if(details.message == true){
                  this.flag1 = details.message;
                  this.flag2 = !details.message;
                }
            });
          }
          else{
            alert("Please turn on your location Or Refresh your page");
          }
        }
        else{
          alert("Please enter remark if you are working from home");
        }
      }
      else{
        if(EmployeehomeComponent.locationPosition != undefined){
          const token = JSON.parse(localStorage.getItem('isEmployee'));
          this.dataService.attendanceCheckIn(id, remark, work,EmployeehomeComponent.locationPosition,token.data).subscribe(details =>{
              if(details.message == 'loginError' || details.message == 'headerUndefined'){
                localStorage.clear();
                alert("Login Timeout");
                this.router.navigateByUrl('/employee');
              }
              else if(details.message == 'fetchingError'){
                alert('There is some error to fetch data');
              }
              else if(details.message == 'exist'){
                alert('You have been marked already');
              }
              else if(details.message == true){
                this.flag1 = details.message;
                this.flag2 = !details.message;
              }
          });
        }
        else{
          alert("Please turn on your location Or Refresh your page");
        }
      }
      
    }
    else{
      alert("Please enter work status");
    }
    

  }

 onCheckOut(id){
  
  if(EmployeehomeComponent.locationPosition != undefined){
    const token = JSON.parse(localStorage.getItem('isEmployee'));
    this.dataService.attendanceCheckOut(token.data, id, EmployeehomeComponent.locationPosition).subscribe(flag=> { 
      if(flag.message == 'loginError' || flag.message == 'headerUndefined'){
        localStorage.clear();
        alert("Login Timeout");
        this.router.navigateByUrl('/employee');
      }
      else if(flag.message == 'fetchingError'){
        alert('There is some error to fetch data');
      }
      else if(flag.message == true){
          this.flag1 = flag.message;
          this.flag2 = flag.message;  
          this.flag3 = !flag.message;
      } 
    });
  }
  else{
    alert("Please turn on your location Or Refresh your page");
  } 
}

}


