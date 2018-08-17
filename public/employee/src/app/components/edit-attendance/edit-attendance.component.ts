/// <reference types="googlemaps" />
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute,Router } from '@angular/router';
import { tokenKey } from '../../../../node_modules/@angular/core/src/view';
@Component({
  selector: 'app-edit-attendance',
  templateUrl: './edit-attendance.component.html',
  styleUrls: ['./edit-attendance.component.css']
})
export class EditAttendanceComponent implements OnInit {
  
  edittableAttendance={
    "_id":"",
    "checkIndate":"",
    "checkInTime":"",
    "checkOutTime":"",
    "checkOutDate":"",
    "checkOutLocation":"",
    "checkInLocation":"",
    "status":"",
    "remark":""
  }
  static locationPosition : any;
  constructor(private dataService:DataService, private router:Router, private route :ActivatedRoute) {
    const token = JSON.parse(localStorage.getItem('isAdmin'));
    if(token ==null){
      this.router.navigateByUrl("/admin");
    }
    else if(token != null){
      this.dataService.getAdminDetails(token.data).subscribe(signal=>{
        if(signal.message == 'loginError' || signal.message == 'headerUndefined'){
          localStorage.clear();
          alert("Login Timeout");
          this.router.navigateByUrl('/admin'); 
        }
  
        else if(signal.message == undefined){
          this.route.params.subscribe( params =>{
            this.dataService.getAttendance(token.data, params.id).subscribe(attendance =>{
              if(attendance.message == 'loginError' ||  attendance.message == 'headerUndefined'){
                localStorage.clear();
                alert("Login Timeout");
                this.router.navigateByUrl('/admin'); 
              } 
              else if(attendance.message == 'fetchingError'){
                 alert('Failed to get attendance details');
                 this.router.navigateByUrl('/admin/home'); 
              }
              else if(attendance.message == undefined){
                this.edittableAttendance = attendance;
              }  
            });     
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
                        alert('Location Detection Timeout');
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
                 
              EditAttendanceComponent.locationPosition = results[0].formatted_address;
            } else {
            window.alert('Geocoder failed due to: ' + status);
          }
        });
          
      }
   }

  ngOnInit() {
  }
  
  onUpdate(){
    const token = JSON.parse(localStorage.getItem('isAdmin'));
    if(this.edittableAttendance.status == "Absent"){
      this.edittableAttendance.checkInTime = "none";
      this.edittableAttendance.checkOutTime = "none";
      this.edittableAttendance.checkOutDate = "none";
      this.edittableAttendance.checkInLocation = "none";
      this.edittableAttendance.checkOutLocation = "none";
      this.edittableAttendance.remark = "none";
      this.dataService.editAttendance(token.data, this.edittableAttendance).subscribe(signal=>{
        this.router.navigate(['admin/home/viewAttendance',signal.empId]);
      });
    }
    else{
      if(EditAttendanceComponent.locationPosition != undefined){
        this.edittableAttendance.checkInLocation = EditAttendanceComponent.locationPosition;
        this.edittableAttendance.checkOutLocation = EditAttendanceComponent.locationPosition;
        if(this.edittableAttendance.checkOutDate=="Yet to be Done"){
           this.edittableAttendance.checkOutDate = this.edittableAttendance.checkIndate;
          this.dataService.editAttendance(token.data, this.edittableAttendance).subscribe(signal=>{
            if(signal.message == 'loginError' || signal.message == 'headerUndefined'){
              localStorage.clear();
              alert("Login Timeout");
              this.router.navigateByUrl('/admin');  
            }
            else if(signal.message == 'fetchingError'){
              alert('Failed to update attendance');
            }
            else if(signal.message == undefined){
              this.router.navigate(['admin/home/viewAttendance',signal.empId]);
            }  
          });
        }
        else{
          this.dataService.editAttendance(token.data, this.edittableAttendance).subscribe(signal=>{
            if(signal.message == 'loginError' || signal.message == 'headerUndefined'){
              localStorage.clear();
              alert("Login Timeout");
              this.router.navigateByUrl('/admin');  
            }
            else if(signal.message == 'fetchingError'){
              alert('Failed to update attendance');
            }
            else if(signal.message == undefined){
              this.router.navigate(['admin/home/viewAttendance',signal.empId]);
            }  
          }); 
        }
      }
      else{
        alert("Please turn on your location Or Refresh your page");
      }
    }
  }
}
