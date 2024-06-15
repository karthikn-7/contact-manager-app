const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModel');
// this module is used for to handle the request from the client


// get all contacts
// GET api/getcontacts
const getContacts =asyncHandler(async (req, res) =>{
    const contacts =await Contact.find({})
    res.status(200).json(contacts);
});

const createContact =asyncHandler(async (req, res) => {
    const data = req.body
    const { name, phone, email} = data;
    if (!name || !phone || !email ){
        throw new Error("All field are mandatory!!")
    }
    const contact = Contact.create({
        name,
        phone,
        email
    })
    res.status(201).json({
        contact,
    })

    
});

// get contact
// GET api/getcontacts/:id

const getContact =asyncHandler(async (req, res) =>{
    try{
        const id = req.params.id
        const contact = await Contact.findById(id)
        try{
            res.send(contact)
        }catch(error){
            req.json({
                message:`error finding the contact for id: ${id}`,
                error:`${error.message}`
            })
        }
    }catch(error){
        res.json({
            error:`${error.message}`
        })
    }
    
});

// update contact
// PUT api/getcontacts/:id

const updateContact =asyncHandler(async (req, res) => {
    res.status(200).json({message:`update contact. id:${req.params.id}`});
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