const router = require('express').Router
const userServices = require('./users.services')


router.get("/", userServices.getAllUsers)
router.get("/:id", userServices.getAllUsers)
router.patch("/:id", userServices.postUser)
    // otra forma de declarar
router.route("/")
    .get()
    .post(userServices.postUser)



module.exports = router