
//Scheduler Implementation
var cron = require('cron');
Employee = require('./models/employees');
Attendance = require('./models/attendance'); 

module.exports.schedule = function(callback){

        
    var cronJob = cron.job("00 30 22 * * 1-6",function(){  
        Employee.getEmployees(function(err, employees){
            if(err){
                console.log({message:"serverProblem"})
            }
            else{
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
                for(var i=0;i<employees.length;i++){
                    var data = employees[i];
                    try{throw data}
                    catch(data) {
                    setTimeout(function(){
                        Attendance.getCheckIn(date, data._id, function(err,attendance1){
                            if(err){
                                console.log({message:"serverProblem"})
                            }
                            if(attendance1 != null){
                                Attendance.getCheckOut(date, attendance1.empId, function(err,attendance2){
                                    if(err){
                                        console.log({message:"serverProblem"});
                                    }
                                    if(attendance2 != null){
                                        //console.log("autoCheckOut");
                                        Attendance.autoCheckOut(attendance2._id, attendance2.checkInDate, attendance2.checkInLocation, function(err,status){
                                        if(err){
                                            console.log({message:"serverProblem"})
                                        }
                                        else{
                                            //console.log(auto checkout done);
                                        }
                                        });
                                    }
                                    if(attendance2 == null){ 
                                    //nothing to do
                                    }
                                }); 
                            }
                            if(attendance1 == null){
                                var data1 = {
                                    id : data._id,
                                    location : "none",
                                    remark : "none",
                                    status : "Absent"
                                }
                            Attendance.markAbsent(date, "none", data1, function(err, status){
                                if(err){
                                    console.log({message:"serverProblem"})
                                }
                                else{
                                    // console.log(absent done for those who didn't mark attendance);
                                }
                            });
        
                            }
                        });
                    },3000);
                    }    
                }
            }
        });
    });
    cronJob.start();
}