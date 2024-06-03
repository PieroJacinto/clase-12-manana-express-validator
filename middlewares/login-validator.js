const { body } = require("express-validator")

const loginValidation = [
    body("email")
        .notEmpty()
        .withMessage("Debes completar tu Email")
        .bail()
        .isEmail()
        .withMessage("Debes escribir un formato de correo valido"),
    body("password")
        .notEmpty()
        .withMessage("Debes Introducir un password")      

]

module.exports = loginValidation;