var mongoose = require('mongoose');
var crypto = require('crypto');

// employee Schema
var employeesSchema = mongoose.Schema({
    email:{
        type: String,
        unique:true,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    hash: {
        type:String
    },
    salt:{
        type:String,
        select:false
    }
});

var Employee = module.exports = mongoose.model('Employee',employeesSchema);

//database query

//get employees

module.exports.getEmployees = function(callback, limit){
    Employee.find(callback).limit(limit);
}


module.exports.getEmployee = function(email, callback){
    var query = {email: email};
    Employee.findOne(query, callback).select('+salt');
    
}
module.exports.getEmployeeById = function(id, callback){
    Employee.findById(id, callback).select('+salt');
}

module.exports.getEmployeeByIdNoSalt = function(id, callback){
    Employee.findById(id, callback);
}

module.exports.addEmployee = function(employee, callback){
    var password = setPassword(employee.password);
    Employee.create({
      email : employee.email,
      fname : employee.fname,
      lname : employee.lname,
      dob : employee.dob,
      address: employee.address,
      phone: employee.phone,
      salt: password.salt,
      hash: password.hash
    }, callback); 
}

module.exports.changePassword = function(id, npassword, callback, options){
    var query ={_id: id};
    var password = setPassword(npassword);
    var update = {
        salt: password.salt,
        hash: password.hash
    }
    Employee.findOneAndUpdate(query, update,options,callback);
}
module.exports.updateEmployee = function(employee, salt, hash, callback, options){
    var  query = {_id: employee.id};
    var update = {
        fname: '',
        lname: '',
        email: '',
        dob: '',
        address: '',
        phone: '',
        salt: '',
        hash: ''
    }
    if(employee.password ==''){
        update.fname = employee.fname,
        update.lname = employee.lname,
        update.email = employee.email,
        update.dob = employee.dob,
        update.address = employee.address,
        update.phone = employee.phone,
        update.salt = salt,
        update.hash = hash
    }
    else{
        var password = setPassword(employee.password);
        update.fname = employee.fname,
        update.lname = employee.lname,
        update.email = employee.email,
        update.dob = employee.dob,
        update.address = employee.address,
        update.phone = employee.phone,
        update.salt = password.salt
        update.hash = password.hash

    }
    Employee.findOneAndUpdate(query, update,options,callback);
}


module.exports.removeEmployee = function(id, callback){
    var  query = {_id: id};
    Employee.remove(query,callback);
}

function setPassword(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return ({salt:this.salt,hash:this.hash});
  };
  