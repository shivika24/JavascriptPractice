var bcrypt = require ('bcrypt');
const saltRounds=10;
var con= require('../dbconnection');
const config=require('config');
const jwt=require('jsonwebtoken');

module.exports.register = async function(req,res){
    const password = req.body.password;
    const repassword = req.body.repassword;
      const encryptedPassword = await bcrypt.hash(password, 10);
      const encryptedPassword1 = await bcrypt.hash(repassword, 10)
      var users={
         "name":req.body.name,
         "email":req.body.email,
         "password":encryptedPassword,
         "repassword":encryptedPassword1
       }
      con.query("SELECT COUNT(*) AS cnt FROM user WHERE email = ? " , users.email , function(err , data){
         if(err){
             console.log(err); 
         }   
         else{
             if(data[0].cnt > 0){  
              return res.status(400).json({resType:0});
             }else{
              var sql = "INSERT INTO `user`(`name`,`email`,`password`,`repassword`) VALUES ('" + users.name + "','" + users.email + "','" + users.password + "','" + users.repassword + "')";
              var query = con.query(sql, function(err, result) {  
                if (err) {
                  res.send({
                    "code":400,
                    "failed":"error ocurred"
                  })
                } else {
                  res.send({
                    "code":200,
                    "success":"user registered sucessfully"
                      });
                  }
              });  
            }       
             }
      })     
    }