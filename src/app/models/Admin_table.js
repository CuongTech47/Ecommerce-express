const mongoose = require("mongoose");

const Schema = mongoose.Schema
const AutoIncrement = require('mongoose-sequence')(mongoose)
const Admin = new Schema({
    admin_name:{
        type:String,
        min:6,
        max : 255,
        require: true
    },
    admin_email:{
        type:String,
        min:6,
        max : 255,
        require: true
    },
    admin_phone:{
        type:String,
        min:6,
        max : 255,
        require: true
    },
    admin_password:{
        type:String,
        min:6,
        max : 1024,
        require: true
    },
},{
    _id : false,
    timestamps : true

})

Admin.plugin(AutoIncrement, {id : 'admin_id_couter'})
module.exports = mongoose.model("Admin",Admin)