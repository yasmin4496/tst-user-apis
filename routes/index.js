const express = require("express");
const router = express.Router();

//Controllers
const usersEmailRouter=require("./usersEmail");
const usersDataRouter=require("./usersData")

//Module vise api
router.use("/users-email",usersEmailRouter);
router.use("/users",usersDataRouter);



module.exports = router;
