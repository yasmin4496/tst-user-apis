const express = require("express");
const router = express.Router();

//create module
const { emailValidation } = require("../Validation/usersEmailValidation");
const { addEmailOfUser } = require("../Controller/usersEmailController");
const { emailListing } = require("../Controller/usersEmailController");
const { deleteEmailOfUser } = require("../Controller/usersEmailController");

//add user email
router.post("/", emailValidation, addEmailOfUser);

//get all email
router.get("/", emailListing);

//delete email
router.delete("/:id", deleteEmailOfUser);

module.exports = router;
