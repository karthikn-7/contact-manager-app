const express = require('express');
const router = express()
const { getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact, } = require('../controllers/contactController') 


router.route("/").get(getContacts).post(createContact)

router.route("/:id").put(updateContact).delete(deleteContact).get(getContact)

module.exports = router;