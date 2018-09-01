# MEAN-attendance-app
 
 ##TO DOWNLOAD MODULES 
 $ npm install
 
 ##TO START SERVER
 $ npm start or $ node app
 
 ##YOU ALSO HAVE TO SET UP DATABASE BY YOUR SELF
 DATABASE STRUCTURE-(MONGODB)
    DBNAME(YOU CAN CHOOSE)-
            admins
            employees
            attendances
   for admins collection you have to enter some data-
   {
     "email": "As your wish",
     "name": "As your wish",
     "hash": "064c9a114b04530b9ebee1b0f376116f336700fa7cfa824f30459b6aa4d9f4df052edd0a4e6df3da83046baf319c898a2cb3dad62fd974f35752f24b2a880ae3",
     "salt": "72df65031f5c029ecee274cdc3dc7428"
   }
   these hash and salt values are setted according password "123456789" after setup you can change password from app.
   
 ## config database 
 go to config/database.js and put your mongodb url
