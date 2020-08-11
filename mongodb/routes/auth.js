const router  = require('express').Router();
const User    = require('../model/User');
const bcrypt  = require('bcryptjs')
const {registerValidation,loginValidation} = require('../validation')
router.get('/getuser' , async (req,res)=> {
    const data = await User.find({}).limit(10);
    res.send(data)

})
router.post('/register', async (req,res)=>{

    //VALIDATE BEFORE MAKING A USER
    const {error}=registerValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message);

    //CHECK IF USER EXISTS
    const emailExist = await User.findOne({email:req.body.email});
    if(emailExist) return res.status(400).send('email already exists');

    //HASHING THE PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);

    //CREATING NEW USER
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try{
        //SAVING USER INTO MONGODB
        const savedUser= await user.save();
        res.send({user:user._id});
    }
    catch(err){
        res.status(400).send(err);
    }

});


router.post('/login', async (req,res)=>{

    // //VALIDATE BEFORE MAKING A USER
    const {error}=loginValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message);

    //CHECK IF USER EXISTS
    const user = await User.findOne({email:req.body.email});
    if(!user) return res.status(400).send('user does not exist');

    //COMPARING THE PASSWORD
    const validPass= await bcrypt.compare(req.body.password,user.password);
    if(!validPass) return res.status(400).send('wrong password');
    res.status(200).send('User Login Successfully');
});

router.delete('/deleteuser', (req,res)=> {
    const user = {
        "email":req.body.id
    }
    const data =  User.deleteOne(user, function(err, obj) {
        if (err) throw err;
        res.send("User deleted Successfully");
      });   

})

router.put('/updateuser', async (req,res)=> {
    var id = {
        "email":req.body.email
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);
    var content = {
        $set:{
        name:req.body.name,
        password:hashedPassword
        }
    }
    const data =  User.updateOne(id,content, function(err, obj) {
        if (err) throw err;
        res.send("User Updated Successfully");
      });   

})

router.get('/aggregate' , async (req,res)=> {  //Aggregate is like group By in sql
    const data = await User.aggregate([
        { $match: { name: "shivikaa" } },
        { $group: {_id: "$name",total: { $sum: "$age" } } }
     ])
    res.send(data)
}) 
module.exports  =   router;