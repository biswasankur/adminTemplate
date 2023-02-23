const express=require('express')
const mongoose=require('mongoose')
const flash=require('connect-flash')
const session=require('express-session')
const cookieParser = require('cookie-parser')
const path=require('path')

const port= process.env.PORT || 3000;

const app=express()

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))

app.use(flash());

app.use(cookieParser())

app.use(session({
    cookie:{maxAge:50000},
    secret:'ankur',
    resave:false,
    saveUninitialized:false
}))


app.set('view engine','ejs')
app.set('views','views')

const adminAuth=require('./middleware/adminAuth')
app.use(adminAuth.adminAuth)

const userRoute=require('./route/userRoute')
app.use(userRoute);

const adminRoute=require('./route/adminRoute')
app.use(adminRoute)

const DBcon="mongodb+srv://nodejsclassankur:CpVfVq2FNymc72Cm@cluster0.vgutcj7.mongodb.net/loginAuthentication"
mongoose.connect(DBcon,{useNewUrlParser:true,useUnifiedTopology:true})
.then(result=>{
    app.listen(port,()=>{
        console.log(`server connected.....`);
        console.log(`server is running at http://localhost:${port}`);
    })
}).catch(err=>{

})


