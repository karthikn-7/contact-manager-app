const express = require('express')
const user = require('../models/userModel')
const bcrypt = require('bcrypt')



// @public
// POST api/users/register
const register = async(req, res) => {

    const userDetails = req.body;

    // first try catch: for programming errors
    try {
        const { username, email, password } = userDetails;
        if (!username || !email || !password){
            return res.status(400).json( { "error":"every fields are mandatory", } )
        }

        // validation try catch
        try{
            // checkin if its the user present or not

            const userAvailable = await user.findOne( { email } );
            if(userAvailable){
                return res.status(400).json( {"error":"User already exists"} )
            }

            //if not password hashing for registering that user
            const hashedPass = await bcrypt.hash(password,10);

            // registering the user in mongodb database
            const newUser = await user.create( { username, email, password:hashedPass } )

            // if user created printing it and sending the response
            if (newUser){
                console.log(newUser)
                res.status(201).json( { 
                    message:"User registered", 
                    "Username":newUser.username, 
                    "email":newUser.email,
                    "id":newUser.id
                } )}

        }catch(error){
            return res.status(400).json( { "error":error.message } )
        }
    }catch(error){
        return res.status(400).json( {"Error":error.message} )
    }
}

// @public
// POST api/users/login
const login = (req, res) => {
    const id = req.params.id;

    res.status(200).json({
        message:"login user",
        entered_id:id
    })
}

// @private
// POST api/users/
const users = (req, res) => {
    res.status(200).json({
        message:"all users"
    })
}

module.exports= {
    register,
    login,
    users
}