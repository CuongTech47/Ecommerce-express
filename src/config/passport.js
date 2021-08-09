const passport = require("passport")
const localStrategy = require("passport-local".Strategy)
const express = require("express")
const bcrypt = require("bcrypt")
const Admin = require("../app/models/Admin_table")
const app = express();

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function(user,done){
    done(null,user.id)
})
passport.deserializeUser(function (id,done){
    Admin.findById(id,function(err,user){
        done(err,user)
    })
})
passport.use(new localStrategy(function(admin_email,admin_password,done){
    Admin.findOne({admin_email:admin_email},function(err,user){
        if(err){
            return done(err)
        }
        if(!user){
            return done(null,false,{messsage:"Incorrect email"})
        }
        bcrypt.compare(admin_password, user.admin_password,function(err,res){
            if(err) return done(err)

            if(res=== false){
                return done(null, false,{message:"Incorrect password"})
            }
            return done(null,user)
        })
    })
}))