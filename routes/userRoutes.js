const express = require("express")

const authcontroller = require("../controllers/authcontrollers")

const router = express.Router()

router.post("/signup", authcontroller.signUp)

module.exports = router