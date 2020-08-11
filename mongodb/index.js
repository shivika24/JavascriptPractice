const express   =   require('express');
const app       =   express();
const mongoose  =   require('mongoose')
const dotenv    =   require('dotenv')

//IMPORT ROUTES
const authRoute =   require('./routes/auth')

//CONNECT TO MONGODB
dotenv.config();
mongoose.connect("mongodb+srv://Shivika:9914725750@cluster0.fkhxe.mongodb.net/<Login-Register>?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true },
()=>console.log('connected to mongodb!')
);

//MIDDLEWARES
app.use(express.json());
//ROUTE MIDDLEWARE
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('server started on 3000'));
