const express = require("express");
const { registerController, loginController } = require("../controllers/authController");

const router = express.Router();

//routes
//REGISTER || POST
router.post('/register', registerController);

//REGISTER || POST
router.post('/login', loginController);

module.exports = router;