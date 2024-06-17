const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModel');
// this module is used for to handle the request from the client


// get all contacts
// GET api/getcontacts
const getContacts =asyncHandler(async (req, res, next) =>{

    const contacts =await Contact.find({})
    if (!contacts){
        res.status(404)
        throw new Error("contact not found")
    }
    res.status(200).json(contacts);
    
});

const createContact =asyncHandler(async (req, res) => {
    const data = req.body
    const { name, phone, email} = data;
    if (!name || !phone || !email ){
        res.status(400)
        throw new Error("All field are mandatory!!")
    }
    const contact = Contact.create({
        name,
        phone,
        email
    })
    res.status(201).json({
        message: "contact created successfully!" 
    })

    
});

// get contact
// GET api/getcontacts/:id

const getContact =asyncHandler(async (req, res) =>{

    const id = req.params.id
    const contact = await Contact.findById(id)
    if (!contact){
        res.status(400)
        const error = new Error("contact not found!")

    }
    res.status(200).json(contact)
    
    
    
});

// update contact
// PUT api/getcontacts/:id

const updateContact =asyncHandler(async (req, res) => {
    const id = req.params.id
    if(!id){
        res.status(405).json({
            error:"method not allowed"
        })
    }
    try{
        
        const data = req.body
        const contact = await Contact.findById(id)
        const updatedContact = await Contact.findByIdAndUpdate(id,data,{ new : true })
        res.status(200).json(updatedContact)


    }catch(error){
        res.status(404).json({
            error:"contact not found"
        })
    }

    
})

// delete contact
// DELETE api/getcontacts/:id

const deleteContact =asyncHandler(async (req, res) => {
    res.status(200).json({message:`delete contact. id:${req.params.id}`});
}); 



module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact,
}