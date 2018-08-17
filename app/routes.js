var crypto = require('crypto');
var jwt = require('jsonwebtoken');

//load admin,employee & attendance model
Admin = require('./models/admins');
Employee = require('./models/employees');
Attendance = require('./models/attendance');

//expose the routes to our app with module.exports
module.exports = function(app) {
    //api ------------------------------------------------------------------------    
    //Admin Login
    app.post('/api/admin_login',function(req,res){
        var req_admin_username = req.body.username;
        var req_admin_password = req.body.password;
        Admin.getAdmin(req_admin_username,function(err, admin){
            if(err){
                res.send({message: 'networkError'});
            }
            else{
                if(admin == null){    
                res.send({message: 'noUser'});  
                }
                else{
                    var hash = crypto.pbkdf2Sync(req_admin_password, admin.salt, 1000, 64, 'sha512').toString('hex');
                if(admin.hash === hash){ 
                    // create a token
                    var token = jwt.sign({
                        id: admin._id,
                        email: admin.email,
                        name: admin.name,
                        flag: "1"
                    }, 'secretkey', {
                        expiresIn: 606900 // expires in 7 days
                    });
                    
                    res.status(200).send({ data: token });
                } 
                else{
                    res.send({message: 'wrongPassword'});
                }
                }
            }
            
        });

    });

    //To fetch employee details by verify token
    app.get('/api/admin_check',verifyToken,(req, res)=>{
        jwt.verify(req.token,'secretkey',function(err, authData){
        if(err){
            res.json({message: 'loginError'});

        } else{
            if(authData.flag == "1"){ 
                Employee.getEmployees(function(err, employees){
                    if(err){
                        res.json({message: 'fetchingError'});
                    }
                    else{
                        res.json(employees);
                    }
                });
            }
            else{
                res.json({message: 'accessDenied'}); 
            }
        }
        });
        
    });

    //api for to stop blank change password page(Employee)
    app.post('/api/checkPsdEmployee',verifyToken,(req, res)=>{
        jwt.verify(req.token,'secretkey',function(err, authData){
        if(err){
            res.json({message: 'loginError'});

        } else{ var id = req.body._id;
                Employee.getEmployeeById(id, function(err, employees){
                    if(err){
                        res.json({message: 'fetchingError'});
                       }
                       else if(employees == null){
                        res.json({message: 'fetchingError'});
                       } 
                       else if(employees !=null){
                        res.json({message: true});
                       } 
                });
        }
        });
        
    });

    //api for to stop blank change password page(Admin)
    app.post('/api/checkPsdAdmin',verifyToken,(req, res)=>{
        jwt.verify(req.token,'secretkey',function(err, authData){
        if(err){
            res.json({message: 'loginError'});

        } else{
            if(authData.flag == "1"){
                var id = req.body._id; 
                Admin.getAdminById(id, function(err, admin){
                   if(err){
                    res.json({message: 'fetchingError'});
                   }
                   else if(admin == null){
                    res.json({message: 'fetchingError'});
                   } 
                   else if(admin !=null){
                    res.json({message: true});
                   }
                });
            }
            else{
                res.json({message: 'accessDenied'}); 
            }
        }
        });
        
    });

    //Delete employee on admin portal
    app.post('/api/delete_employee',verifyToken,(req, res)=>{
        jwt.verify(req.token,'secretkey',function(err, authData){
        if(err){
            res.json({message: 'loginError'});

        } else{
            if(authData.flag == "1"){ 
                id = req.body.id;
                Employee.removeEmployee(id,function(err,employee){
                    if(err){
                        res.json({message: 'fetchingError'});
                    }
                    Attendance.removeAttendance(id , function(err,status){
                        if(err){
                            throw err;
                        }
                        res.json({message: true});
                    });
                    
                });
            }
            else{
            res.json({message: 'accessDenied'}); 
            }   
        }
    });
    
    });


    //get admin details
    app.get('/api/admin_details',verifyToken,(req, res)=>{
        jwt.verify(req.token,'secretkey',function(err, authData){
        if(err){
        res.json({message: 'loginError'});

        } else{ 
            res.json(authData);
            
        }
    });
    
    });

    //employee registration by admin portal
    app.post('/api/employee_register',verifyToken,(req, res)=>{
        jwt.verify(req.token,'secretkey',function(err, authData){
        if(err){
            res.json({message: 'loginError'});

        } else{
            if(authData.flag == "1"){ 
            employee = req.body;
            Employee.addEmployee(employee, function (err, employee) {
                if (err) {
                    res.json({message: 'Failed to register'});
                }    
                else{
                    res.json({message: true});
                }
                
            });
            }
            else{
                res.json({message: 'accessDenied'});
            }  
        }
    });
    
    });

    //get employee to edit
    app.post('/api/getEmployeeToEdit',verifyToken,(req, res)=>{
        jwt.verify(req.token,'secretkey',function(err, authData){
        if(err){
            res.json({message: 'loginError'});

        } else{ 
            if(authData.flag == "1"){ 
                employee = req.body;
                Employee.getEmployeeByIdNoSalt(employee.empId,function(err, employee){
                    if(err){
                        res.json({message: 'fetchingError'});
                    }
                    else{
                          res.json(employee);
                    }
                });
            }
            else{
                res.json({message: 'accessDenied'});
            } 
        }
    });
    
    });
    //employee update by admin portal
    app.post('/api/employee_update',verifyToken,(req, res)=>{
        jwt.verify(req.token,'secretkey',function(err, authData){
        if(err){
        res.json({message: 'loginError'});

        } else{ 
            if(authData.flag == "1"){
                employee = req.body;
                Employee.getEmployeeById(employee.id,function(err, employee1){
                    if(err){
                        res.json({message: 'fetchingError'});
                    }
                    else{
                        Employee.updateEmployee(employee,employee1.salt, employee1.hash, function (err, employee) {
                            if (err) {
                                res.json({message: 'Failed to update employee'});
                            }
                            else{
                                res.json({message: true});
                            }
                            
                        });
                    }
                });
            }
            else{
                res.json({message: 'accessDenied'});
            }  
            
        }
    });
    
    });

    //get specific attendance for edit
    app.post('/api/getAttendance',verifyToken,(req, res)=>{
        jwt.verify(req.token,'secretkey',function(err, authData){
        if(err){
        res.json({message: 'loginError'});

        } else{ 
            if(authData.flag == "1"){
                data = req.body;
                Attendance.getAttendanceById(data.id, function(err, attendance){
                    if(err){
                        res.json({message: 'fetchingError'});
                    }
                    else{
                        res.json(attendance); 
                    }
                });
            }
            else{
                res.json({message: 'accessDenied'});
            } 
        }
    });
    
    });

     //commit changes for  edited attendance
     app.post('/api/editAttendance',verifyToken,(req, res)=>{
        jwt.verify(req.token,'secretkey',function(err, authData){
        if(err){
        res.json({message: 'loginError'});

        } else{ 
            if(authData.flag == "1"){
                var data = req.body;
                Attendance.updateAttendance(data, function(err, attendance){
                    if(err){
                        res.json({message: 'fetchingError'});
                    }
                    else{
                        res.json(attendance); 
                    }
                });
            }
            else{
                res.json({message: 'accessDenied'});
            } 
        }
    });
    
    });

    //fetch attendance for both admin as well as employee no flag check required
    app.post('/api/viewEmployeeAttendance',verifyToken,(req, res)=>{
        jwt.verify(req.token,'secretkey',function(err, authData){
        if(err){
        res.json({message: 'loginError'});
        } 
        else{
            
            data = req.body;
            Attendance.getAttendance(data, function(err, attendance){
                if(err){
                    res.json({message: 'fetchingError'});
                }
                else{
                    if(attendance[0] != null){
                      res.json(attendance); 
                    }
                    else if(attendance[0] == null){
                        res.json({message:'fetchingError'});
                    }
                }
            });
        }
    });
    
    }); 

    //Format of token
    //Authorization:bearer<access_token>

    //Verify Token
    function verifyToken(req, res, next){
        //Get auth header value
        const bearerHeader = req.headers['authorization'];
        //check  if bearer is undefined

        if(typeof bearerHeader !== "undefined"){
        //split at space
        const bearer = bearerHeader.split(' ');
        //Get token from array
        const bearerToken = bearer[1];
        //set the token
        req.token = bearerToken;
        
        //next middleware
        next();
        }
        else{
        //Forbidden
        res.json({message:'headerUndefined'});
        }
    }




    //Employee Login
    app.post('/api/employee_login',function(req,res){
        var req_employee_email = req.body.email;
        var req_employee_password = req.body.password;
        Employee.getEmployee(req_employee_email,function(err, employee){
            if(err){
                res.json({message:'networkError'});
            }
            else{
                if(employee == null){    
                res.send({message: 'noUser'});  
                }
                else{
                    var hash = crypto.pbkdf2Sync(req_employee_password, employee.salt, 1000, 64, 'sha512').toString('hex');
                if(employee.hash === hash){ 
                    // create a token
                    var token = jwt.sign({id: employee._id,fname: employee.fname, lname: employee.lname, dob:employee.dob, email: employee.email,
                        phone: employee.phone, address: employee.address,flag: "0"}, 'secretkey', {
                        expiresIn: 43200 // expires in 12 hours
                    });
                    
                    res.status(200).send({ data: token });
                } 
                else{
                    res.send({message: 'wrongPassword'});
                }
                }
            }
            
        });

    });

    //To fetch employee details by verify token
    app.get('/api/employee_check',verifyToken,(req, res)=>{
        jwt.verify(req.token,'secretkey',function(err, authData){
        if(err){
            res.json({message: 'loginError'});

        } else{
                    res.json(authData);
                }
        
        });
        
    });


    //Attendance Marking checkin
    app.post('/api/attendanceCheckIn',verifyToken,(req, res)=>{
        jwt.verify(req.token,'secretkey',function(err, authData){  
        if(err){ 
        res.json({message: 'loginError'});

        } else{
            data = req.body;
            //time set
            var t = new Date();
            localTime = t.getTime();
            localOffset = t.getTimezoneOffset() * 60000;
            utc = localTime + localOffset;
            offset = 5.5;   
            bombay = utc + (3600000*offset);
            nd = new Date(bombay); 
            var part =  nd.toLocaleString().split(' ');
            var date =  part[0];
            var time = part[1];
            Attendance.getCheckIn(date, data.id, function(err,attendance1){
                if(err){
                res.json({message: 'fetchingError'});
                }
                if(attendance1 != null){
                res.json({message: 'exist'});
                }
                if(attendance1 == null){
                    Attendance.addAttendance(date, time, data ,function(err,attendance){
                        if(err){
                            res.json({message: 'fetchingError'});
                        }
                        res.json({message: true});
                    }); 
                }
            });
            
        }
    });
    
    });

    //Attendance Marking checkout
    app.post('/api/attendanceCheckOut',verifyToken,(req, res)=>{
        jwt.verify(req.token,'secretkey',function(err, authData){  
        if(err){ 
        res.json({message: 'loginError'});

        } else{
            data = req.body;
            //time set
            var t = new Date();
            localTime = t.getTime();
            localOffset = t.getTimezoneOffset() * 60000;
            utc = localTime + localOffset;
            offset = 5.5;   
            bombay = utc + (3600000*offset);
            nd = new Date(bombay); 
            var part =  nd.toLocaleString().split(' ');
            var date =  part[0];
            var time = part[1];
        Attendance.checkOutAttendance(date, time, data ,function(err,attendance){
                if(err){
                res.json({message: 'fetchingError'});
                }
                res.json({message: true});
            });
            
        }
    });
    
    }); 

    //Attendance Completion Check
    app.post('/api/attendanceCheckCompletetion',verifyToken,(req, res)=>{
        jwt.verify(req.token,'secretkey',function(err, authData){  
        if(err){ 
            res.json({message: 'loginError'});

        } else{
            data = req.body;
            //time set
            var t = new Date();
            localTime = t.getTime();
            localOffset = t.getTimezoneOffset() * 60000;
            utc = localTime + localOffset;
            offset = 5.5;   
            bombay = utc + (3600000*offset);
            nd = new Date(bombay); 
            var part =  nd.toLocaleString().split(' ');
            var date =  part[0];
            Attendance.getCheckOut(date, data.empId, function(err,attendance1){
                if(err){
                    res.json({message: 'fetchingError'});
                }
                if(attendance1 != null){
                res.json({message: false});
                }
                if(attendance1 == null){
                    Attendance.getCheckIn(date, data.empId, function(err,attendance2){
                        if(err){
                            res.json({message: 'fetchingError'});
                        }
                        if(attendance2 != null){
                        res.json({message: "checkedIn"});
                        }
                        if(attendance2 == null){
                        res.json({message: "noEntry"});  
                        }
                    });  
                }
            });
        }
    });
    
    }); 


    app.post('/api/changepwd', verifyToken, (req, res)=>{
        jwt.verify(req.token,'secretkey',function(err, authData){  
            if(err){ 
                res.json({message: 'loginError'});
    
            } else{
                var data = req.body;
                if(data.flag =="a"){
                    Admin.getAdminById(data.id, function(err, admin){
                        if(err){
                            res.json({message: 'fetchingError'});
                        }
                        else{
                            if(admin == null){    
                                res.send({message: 'noUser'});  
                            }
                            else{
                                var hash = crypto.pbkdf2Sync(data.password, admin.salt, 1000, 64, 'sha512').toString('hex');
                            if(admin.hash === hash){ 
                                Admin.updateAdmin(admin._id, data.npassword, function(err, status){
                                    if(err){
                                        res.json({message: 'fetchingError'});
                                    }
                                    else{
                                        res.json({message: true});
                                    }
                                });
                                
                            }   
                            else{
                                res.send({message: 'You entered wrong old password'});
                            }
                            } 
                        }
                    });
                }
                if(data.flag =="e"){
                    Employee.getEmployeeById(data.id, function(err, employee){
                        if(err){
                            res.json({message: 'fetchingError'});
                        }
                        else{
                            if(employee == null){    
                            res.send({message: 'noUser'});  
                            }
                            else{
                                var hash = crypto.pbkdf2Sync(data.password, employee.salt, 1000, 64, 'sha512').toString('hex');
                            if(employee.hash === hash){ 
                                Employee.changePassword(employee._id, data.npassword,function(err, status){
                                    if(err){
                                        res.json({message: 'fetchingError'});
                                    }
                                    else{
                                        res.json({message: true});
                                    }
                                });
                                
                            }   
                            else{
                                res.send({message: 'You entered wrong old password'});
                            }
                            }
                        }
                        
                    });
                }
            }
        });
    });

    app.get('*',function(req, res) {
        res.sendfile('./public/employee/dist/employee/index.html');
        //load the single view file (angular will handle the page changes on the the front - end)
      });

   

};