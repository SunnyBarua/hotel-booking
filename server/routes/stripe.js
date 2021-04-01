const express=require("express");
const { createConnectAccount, getAccountStatus } = require("../controllers/stripe");
const { requireSignIn } = require("../middlewares");

const router=express.Router();

router.post('/create-connect-account',requireSignIn,createConnectAccount)
router.post('/get-account-status',requireSignIn,getAccountStatus)

module.exports=router