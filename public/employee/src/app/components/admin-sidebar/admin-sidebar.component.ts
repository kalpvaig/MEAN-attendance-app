import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  adminPostData = {
    id:"",
    name:"",
    email:""
  };
  constructor(private dataService:DataService, private router:Router) {
    const token = JSON.parse(localStorage.getItem('isAdmin'));
    this.dataService.getAdminDetails(token.data).subscribe(adminDetails=>{
      this.adminPostData = adminDetails;
    });
   }
   
  ngOnInit() {
  }
  
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/admin'); 
  }

  changePassword(){
    this.router.navigate(['admin/home/changePassword',this.adminPostData.id]);
  }
}
