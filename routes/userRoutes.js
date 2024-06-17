const express = require('express')
const router = express.Router();
const { users,login,register } = require('../controllers/userController')


router.get("/", users)
router.post("/register", register)
router.post("/login/:id", login)


module.exports = router
