const jwt = require('jsonwebtoken')

exports.adminAuth=(req,res,next)=>{
    if(req.cookies && req.cookies.adminToken){
        jwt.verify(req.cookies.adminToken, "ankur@123" , (err,data)=>{
            req.user = data
            next()
        })
    }else{
        next()
    }
}