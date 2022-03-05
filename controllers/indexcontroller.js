var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
let passport=require('passport');

//Create the UserModel instance
 let userModel=require('../model/user');
 let User =userModel.User;

 let flash = require('connect-flash');



exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
}


exports.contactme = function(req, res, next) {
    res.render('contactme', { title: 'Contact me' });
}

exports.projects = function(req, res, next) {
    res.render('projects', { title: 'Projects' });
}

exports.services = function(req, res, next) {
    res.render('services', { title: 'services' });
}

exports.aboutme = function(req, res, next) {
    res.render('aboutme', { title: 'About' });
}


module.exports.displayLoginPage =(req,res,next)=>{
    //Check if the user already Logged In
    if(!req.user)
    {
        res.render('auth/login',
        {
            title:"Login",
            messages:req.flash('loginMessage'),
            displayName:req.user ? req.user.displayName:''
        })
    }
    else
    {
         return res.redirect('/');
    }
}

module.exports.processLoginPage=(req,res,next)=>{
    passport.authenticate('local',
    (err, user, info)=>{
        //server err?
        if(err)
        {
            return next(err);
        }
        //is there a user login error?
        if(!user)
        {
            req.flash('loginMessage','Authentication Error');
            return res.redirect('/login');
        }
        req.login(user,(err)=>{
            //server error?
            if(err)
            {
                return next(err);
            }
            return res.redirect('/Bcontact');
        });
    })(req,res,next);
}

module.exports.displayRegisterPage =(req,res,next)=>{
    //check if user is not logged in
    if(!req.user)
    {
        res.render('auth/register',
        {
            title:"Register",
            messages:req.flash('registerMessage'),
            displayName:req.user ? req.user.displayName:''
        });
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processRegisterPage = (req,res,next)=>{
    //instantiate a user object
    let newUser=new User({
        username:req.body.username,
        //password:req.body.password,
        email:req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser,req.body.password,(err)=>
    {
        if(err)
        {
            console.log("Ërror: Inserting New User");
            if(err.name == "UserExistError")
            {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists'
                );
                console.log('Error: User Already Exists!')
            }
            return res.render('auth/register',
            {
                title: 'Register',
                messages: req.flash('registerMessages'),
                displayName:req.user ? req.user.displayName:''
            });
        }
        else 
        {
            //if no error exists, then registration is successful

            //redirect the user and authenticate them

            return passport.authenticate('local')(req,res,()=>{
                res.redirect('/Bcontact')
            });
        }
    });
}

module.exports.performLogout=(req,res,next)=>{
    req.logout();
    res.redirect('/');
}