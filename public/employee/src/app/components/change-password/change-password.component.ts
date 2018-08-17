import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  $: any;
  user ={
   password:"",
   npassword:""
  };
  temp ={
    ncpassword:""
  }
  id:any;
  constructor(private dataService:DataService, private router:Router, private route :ActivatedRoute) { 
    const token1 = JSON.parse(localStorage.getItem('isAdmin'));
    const token2 = JSON.parse(localStorage.getItem('isEmployee')); 
    if(token1 == null){
      if(token2 == null){
        this.router.navigateByUrl('/');
      }
      else if(token2 != null){
        this.dataService.checkEmployeeLoggedIn(token2.data).subscribe(signal=>{
          if(signal.message == 'loginError' || signal.message == 'headerUndefined'){
            localStorage.clear();
            alert("Login Timeout");
            this.router.navigateByUrl('/employee'); 
          }
          else if(signal.message == undefined){
            this.route.params.subscribe(params=>{
              this.id = params.id;
              this.dataService.checkPsdEmployee(token2.data, this.id).subscribe(signal=>{
                 if(signal.message == 'loginError' || signal.message == 'headerUndefined'){
                  localStorage.clear();
                  alert("Login Timeout");
                  this.router.navigateByUrl('/employee');
                 }
                 else if(signal.message == 'fetchingError'){
                   alert('Unable to make action');
                   this.router.navigateByUrl('/employee/home');
                 }
              });
            });
          }
        });  
      }
    }
    if(token2 == null){
      if(token1 == null){
        this.router.navigateByUrl('/');
      }
      else if(token1 != null){
        this.dataService.getAdminDetails(token1.data).subscribe(signal=>{
          if(signal.message == 'loginError' || signal.message == 'headerUndefined'){
            localStorage.clear();
            alert("Login Timeout");
            this.router.navigateByUrl('/admin'); 
          }
          else if(signal.message == undefined){
            this.route.params.subscribe(params=>{
              this.id = params.id;
              this.dataService.checkPsdAdmin(token1.data, this.id).subscribe(signal=>{
                if(signal.message == 'loginError' || signal.message == 'headerUndefined'){
                  localStorage.clear();
                  alert("Login Timeout");
                  this.router.navigateByUrl('/admin');
                 }
                 else if(signal.message == 'fetchingError'){
                   alert('Unable to make action');
                   this.router.navigateByUrl('/admin/home');
                 }
              });
            });
          }
        });  
      }
    }
    
  }

  ngOnInit() {
  }
  onPasswordChange(){
    var cpass = this.temp.ncpassword;
    if(this.user.password !='' && this.user.npassword !='' && this.temp.ncpassword != ''){
      if(this.user.npassword == cpass){
        const token1 = JSON.parse(localStorage.getItem('isAdmin'));
        const token2 = JSON.parse(localStorage.getItem('isEmployee'));
        if(token1 == null){
           var data ={
             id:this.id,
             flag:"e",
             password:this.user.password,
             npassword:this.user.npassword
           };
          this.dataService.changePassword(token2.data, data).subscribe(signal=>{
            if(signal.message == true){
              alert("Your password has been changed");
              this.router.navigateByUrl('/employee/home');
            }
            if(signal.message == "loginError" || signal.message == 'headerUndefined'){
              localStorage.clear();
              alert('Login Timeout');
              this.router.navigateByUrl('/employee');
            }
            else if(signal.message == 'fetchingError' || signal.message == 'You entered wrong old password' || signal.message == 'noUser'){
              alert(signal.message);
            }  
          });   
        } 
        if(token2 == null){
          var data ={
            id:this.id,
            flag:"a",
            password:this.user.password,
            npassword:this.user.npassword
          };
          this.dataService.changePassword(token1.data, data).subscribe(signal=>{
            if(signal.message == true){
             // $('#myModal').modal('show');
             alert("Your password has been changed");
             this.router.navigateByUrl('/admin/home');
            }
            if(signal.message == "loginError" || signal.message == 'headerUndefined'){
              localStorage.clear();
              alert('Login Timeout');
              this.router.navigateByUrl('/admin');
            }
            else if(signal.message == 'fetchingError' || signal.message == 'You entered wrong old password' || signal.message == 'noUser'){
              alert(signal.message);
            }  
          });
        }
      }
      else{
        alert("mismatch confirm password");
      }
    }
    else{
      alert("Please fill all credentials");
    }
  }
  return(){
    this.router.navigateByUrl('/admin/home');
  }
}
