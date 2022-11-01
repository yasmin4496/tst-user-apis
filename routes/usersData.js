const express = require("express");
const router = express.Router();

//create module
const { userDataValidation } = require("../Validation/usersDataValidation");
const { addDataOfUser } = require("../Controller/usersDataController");
const { getAllDataOfUser } = require("../Controller/usersDataController");
const { deleteDataOfUser } = require("../Controller/usersDataController");

//add user data
router.post("/", userDataValidation, addDataOfUser);

//get all email
router.get("/", getAllDataOfUser);

//delete email
router.delete("/:id", deleteDataOfUser);

module.exports = router;
