import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})

export class AdminloginComponent implements OnInit {
  token:any;
  admin ={
    username:'',
    password:''
  }

  constructor(private dataService:DataService, private router:Router) {
    const token = JSON.parse(localStorage.getItem('isAdmin'));
    if(token != null){
        this.dataService.getAdminDetails(token.data).subscribe(signal=>{
          if(signal.message != 'loginError' && signal.message != 'headerUndefined'){
            this.router.navigateByUrl('/admin/home');
          }
        });
    }
  }

 
  ngOnInit() {
    
  }

  
  login(){
   
  if(this.admin.username!='' && this.admin.password !=''){
    this.dataService.loginAdmin(this.admin).subscribe(tokenfromapi =>{
      this.token = tokenfromapi.data;
      if(tokenfromapi.message == 'noUser'){
        alert("Admin do not exist");
        
      }
      else if(tokenfromapi.message == 'wrongPassword'){
        alert("Wrong Password");
        
      }
      else if(tokenfromapi.message == 'networkError'){
        alert("There is network problem");
        
      }
    
      else if(this.token != undefined){
       var adminLink = {
         "visibility":"hidden"
        } 
       localStorage.clear();
       localStorage.setItem('isAdmin',JSON.stringify(tokenfromapi));
       localStorage.setItem('isAdminLink',JSON.stringify(adminLink));
       this.router.navigateByUrl('/admin/home');
      }
      
    });
 }
 else{
   if(this.admin.username !=''){
     if(this.admin.password ==''){
       alert('Please Enter Password');
     }
   }
   if(this.admin.password !=''){
     if(this.admin.username ==''){
      alert('Please Enter Username');
     }
   }
   if(this.admin.username =='' && this.admin.password == ''){
     alert('Please Enter Username & Password');
   }
 }
}
   
  

}