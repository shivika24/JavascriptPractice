var bcrypt = require ('bcrypt');
const saltRounds=10;
var con= require('../dbconnection');
const config=require('config');
const jwt=require('jsonwebtoken');

module.exports.getuser = async function(req,res){
    con.query("SELECT * FROM user", function(err , data){
        if(err){
            console.log(err); 
        } 
        else
        {
            res.send({"data":data})
        }
    })
}

module.exports.register = async function(req,res){
    const password = req.body.password;
    const repassword = req.body.repassword;
    if(password==repassword)
    {
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
              return res.send({
                "code":202,
                "failed":"User Already Registered"
              })
             }else{
              var d=new Date().toISOString().slice(0, 19).replace('T',' ');
              var sql = "INSERT INTO `user`(`name`,`email`,`password`,`dateTime`) VALUES ('" + users.name + "','" + users.email + "','" + users.password  + "','" + d + "')";
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
    else
    {
        res.send({
            "code":404,
            "success":"passwords do not match"
            });
    }
    }

    module.exports.login = async function(req,res){
        var email= req.body.email;
        var password = req.body.password;
        con.query('SELECT * FROM user WHERE email = ?',email, async function (error, results, fields) {
          if (error) {
            res.send({
              "code":400,
              "failed":"error ocurred"
            })
          }else{
            if(results.length >0){
              console.log(results[0].password);
              console.log(password);        
              let comparision = await bcrypt.compare(password, results[0].password)
              console.log(comparision);
              if(comparision){
               
                  res.send({
                    "code":204,
                    "success":"Email and password match"
               })
                  
              }
              else{
                res.send({
                     "code":204,
                     "success":"Email and password does not match"
                })
              }
            }
            else{
              res.send({
                "code":206,
                "success":"Email does not exits"
                  });
            }
          }
          });
        }

    module.exports.deleteuser = async function(req,res){
        con.query('DELETE FROM user WHERE email = ?', req.body.email, function(err , data){
            if(err){
                console.log(err); 
            } 
            else
            {
                res.send({"response":'USER DELETED SUCCESSFULLY'})
            }
            })
        }

        module.exports.edituser = async function(req,res){
            var users={
                "name":req.body.name,
                "email":req.body.email,
              }
            if(users.name&&req.body.password)
            {
            const password11 = req.body.password;
            const encryptedPassword11 = await bcrypt.hash(password11, 10);
            var myquery = "UPDATE user SET name = '"+users.name+"' AND password = '"+encryptedPassword11+"' WHERE email = '"+users.email+"'";
            con.query(myquery, function(err , data){
                if(err){
                    console.log(err); 
                } 
                else
                {
                    res.send({"response":'BOTH EDITED SUCCESSFULLY'})
                }
                })
            }
            else if(users.name)
            {
            var myquery = "UPDATE user SET name = '"+users.name+"' WHERE email = '"+users.email+"'";
            con.query(myquery, function(err , data){
                if(err){
                    console.log(err); 
                } 
                else
                {
                    res.send({"response":'NAME EDITED SUCCESSFULLY'})
                }
                })
            }
            else if(req.body.password)
            {
                const password11 = req.body.password;
                const encryptedPassword11 = await bcrypt.hash(password11, 10);
                console.log(encryptedPassword11)
                var query1 = "UPDATE user SET password = '"+encryptedPassword11+"' WHERE email = '"+users.email+"'";
                con.query(query1, function(err , data){
                if(err){
                    console.log(err); 
                } 
                else
                {
                    res.send({"response":'PASSWORD EDITED SUCCESSFULLY'})
                }
                })
            }
            }