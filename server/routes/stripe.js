const express=require("express");
const { createConnectAccount, getAccountStatus ,stripeSessionId,stripeSuccess} = require("../controllers/stripe");
const { requireSignIn } = require("../middlewares");

const router=express.Router();

router.post('/create-connect-account',requireSignIn,createConnectAccount)
router.post('/get-account-status',requireSignIn,getAccountStatus)
router.post('/stripe-session-id',requireSignIn,stripeSessionId)
router.post('/stripe-success',requireSignIn,stripeSuccess)

module.exports=router