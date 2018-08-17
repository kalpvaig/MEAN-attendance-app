var mongoose = require('mongoose');

// Attednance Schema
var attendanceSchema = mongoose.Schema({
    empId:{
        type: String,
        required: true
    },
    checkInTime: {
        type: String
    },
    checkInLocation: {
        type: String
    },
    checkInDate:{
        type: String
    },
    checkOutTime:{
        type:String
    },
    checkOutLocation: {
        type: String
    },
    checkOutDate:{
        type:String
    },
    status:{
        type: String,
        required: true 
    },
    remark:{
        type: String 
    }
    
});

var Attendance = module.exports = mongoose.model('Attendance',attendanceSchema);

//database query

//get attendace
module.exports.getAttendanceById = function(id, callback){
    var query = { _id: id};
    Attendance.findOne(query, callback);
}

module.exports.getAttendance = function(data, callback, limit){
    var query = { empId: data.empId };
    Attendance.find(query, callback).limit(limit);
}



module.exports.getCheckIn = function(date, id, callback){
    var query = {empId: id,
                 checkInDate: date 
                };
    Attendance.findOne(query, callback);
    
}

module.exports.getCheckOut = function(date, id, callback){
    var query = {empId: id,
                 checkInDate: date,
                 checkOutDate:"Yet to be Done" 
                };
    Attendance.findOne(query, callback);
    
}

module.exports.addAttendance = function(date, time, data, callback){
   
    Attendance.create({
      empId: data.id,
      checkInTime: time,
      checkInLocation: data.location,
      checkInDate: date,
      checkOutTime:"Yet to be Done",
      checkOutLocation:"Yet to be Done",
      checkOutDate: "Yet to be Done",
      status: data.status,
      remark: data.remark

    },callback);
}

module.exports.markAbsent = function(date, time, data, callback){
   
    Attendance.create({
      empId: data.id,
      checkInTime: time,
      checkInLocation: data.location,
      checkInDate: date,
      checkOutTime:"none",
      checkOutLocation:"none",
      checkOutDate: "none",
      status: data.status,
      remark: data.remark

    },callback);
}

module.exports.checkOutAttendance = function(date, time, data, callback, options){
    var query = { empId : data.empId, checkInDate : date};
    var update = {
        checkOutTime : time,
        checkOutLocation : data.location,
        checkOutDate: date
    }
    Attendance.findOneAndUpdate(query, update,options,callback);
}

module.exports.updateAttendance = function(data, callback, options){
    var query = { _id : data._id};
    var update = {
        checkInTime: data.checkInTime,
        checkInLocation: data.checkInLocation,
        checkOutTime: data.checkOutTime,
        checkOutLocation: data.checkOutLocation,
        checkOutDate: data.checkOutDate,
        status: data.status,
        remark: data.remark
    }
    Attendance.findOneAndUpdate(query, update,options,callback);
}

module.exports.autoCheckOut = function(id, date, location, callback, options){
    var  query = {_id: id};
    var update = {
        checkOutTime : "16:00:00",
        checkOutDate : date,
        checkOutLocation : location
    }
    Attendance.findOneAndUpdate(query, update,options,callback);
}

module.exports.removeAttendance = function(empId, callback){
    var  query = {empId: empId};
    Attendance.remove(query,callback);
}