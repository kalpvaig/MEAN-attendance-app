import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:Http) { }
  
 // rootUrl = 'http://localhost:8080/';
    rootUrl = '';
  //admin works
    loginAdmin(admin){
     return this.http.post(this.rootUrl+'api/admin_login',admin)
    .pipe(map((response: Response) =>  response.json()));
    }
    
    getAdminDetails(token): Observable<any> {
      var apiUrl =this.rootUrl+'api/admin_details'; 
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'bearer '+token
      });
      return this.http.get(apiUrl, { headers: headers })
      .pipe(map((response: any) =>  response.json()));
    }
   
    checkAdminLoggedIn(token): Observable<any> {
      var apiUrl =this.rootUrl+'api/admin_check'; 
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'bearer '+token
      });
      return this.http.get(apiUrl, { headers: headers })
      .pipe(map((response: any) =>  response.json()));
    }

    deleteEmployee(id, token): Observable<any> {
      var del_id ={'id':id};
      var apiUrl =this.rootUrl+'api/delete_employee'; 
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'bearer '+token
      });
      return this.http.post(apiUrl,del_id, { headers: headers })
      .pipe(map((response: any) =>  response.json()));
    }
    
    
    addEmployee(employee, token): Observable<any> {
      var apiUrl =this.rootUrl+'api/employee_register'; 
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'bearer '+token
      });
      return this.http.post(apiUrl,employee, { headers:headers } )
      .pipe(map((response: any) =>  response.json()));
    }

    getEmployeeToEdit(token, empId): Observable<any> {
      var body ={ empId : empId };
      var apiUrl =this.rootUrl+'api/getEmployeeToEdit'; 
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'bearer '+token
      });
      return this.http.post(apiUrl, body, { headers:headers })
      .pipe(map((response: any) =>  response.json()));
    }
    updateEmployee(employee, token): Observable<any> {
      var apiUrl =this.rootUrl+'api/employee_update'; 
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'bearer '+token
      });
      return this.http.post(apiUrl,employee, { headers:headers } )
      .pipe(map((response: any) =>  response.json()));
    }

    viewEmployeeAttendance(token, empId): Observable<any> {
      var body ={ empId : empId };
      var apiUrl =this.rootUrl+'api/viewEmployeeAttendance'; 
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'bearer '+token
      });
      return this.http.post(apiUrl, body, { headers:headers })
      .pipe(map((response: any) =>  response.json()));
    }

    getAttendance(token, id): Observable<any> {
      var body ={ id : id };
      var apiUrl =this.rootUrl+'api/getAttendance'; 
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'bearer '+token
      });
      return this.http.post(apiUrl, body, { headers:headers })
      .pipe(map((response: any) =>  response.json()));
    }

    editAttendance(token, data): Observable<any> {
      var apiUrl =this.rootUrl+'api/editAttendance'; 
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'bearer '+token
      });
      return this.http.post(apiUrl, data, { headers:headers })
      .pipe(map((response: any) =>  response.json()));
    }

    //employee works
    loginEmployee(employee){
      return this.http.post(this.rootUrl+'api/employee_login',employee)
     .pipe(map((response: Response) =>  response.json()));
     }

     checkPsdAdmin(token,id): Observable<any>{
      var body ={_id : id};
      var apiUrl =this.rootUrl+'api/checkPsdAdmin'; 
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'bearer '+token
      });
      return this.http.post(apiUrl, body, { headers: headers })
      .pipe(map((response: any) =>  response.json()));
    }

    checkPsdEmployee(token,id): Observable<any>{
      var body ={_id : id};
      var apiUrl =this.rootUrl+'api/checkPsdEmployee'; 
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'bearer '+token
      });
      return this.http.post(apiUrl, body, { headers: headers })
      .pipe(map((response: any) =>  response.json()));
    }

     checkEmployeeLoggedIn(token): Observable<any> {
      var apiUrl =this.rootUrl+'api/employee_check'; 
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'bearer '+token
      });
      return this.http.get(apiUrl, { headers: headers })
      .pipe(map((response: any) =>  response.json()));
    }
    
    attendanceCheckIn(id, remark, status, location, token): Observable<any>{
      var body ={'id':id, 'remark': remark, 'status':status, 'location':location};
      var apiUrl =this.rootUrl+'api/attendanceCheckIn'; 
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'bearer '+token
      });
      return this.http.post(apiUrl, body, { headers: headers })
      .pipe(map((response: any) =>  response.json()));
    }
   
    attendanceCheckOut(token, id, location): Observable<any>{
      var body ={empId : id, location : location};
      var apiUrl =this.rootUrl+'api/attendanceCheckOut'; 
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'bearer '+token
      });
      return this.http.post(apiUrl, body, { headers: headers })
      .pipe(map((response: any) =>  response.json()));
    }
    
    attendanceCheckCompletetion(token, id): Observable<any>{
      var body ={empId : id};
      var apiUrl =this.rootUrl+'api/attendanceCheckCompletetion'; 
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'bearer '+token
      });
      return this.http.post(apiUrl, body, { headers: headers })
      .pipe(map((response: any) =>  response.json()));
    }

    changePassword(token, data): Observable<any>{
      var apiUrl =this.rootUrl+'api/changepwd'; 
      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'bearer '+token
      });
      return this.http.post(apiUrl, data, { headers: headers })
      .pipe(map((response: any) =>  response.json()));
    }

  
}
