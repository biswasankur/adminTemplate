const mongoose=require('mongoose')
const Schema=mongoose.Schema
const adminSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isVarifyed:{
        type:Boolean,
        default:true
    },
})
const adminmodel=new mongoose.model('user',adminSchema)
module.exports=adminmodel