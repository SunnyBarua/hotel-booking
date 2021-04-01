const Stripe =require("stripe");
const queryString =require("query-string");
const User=require("../models/user")

const stripe = Stripe('sk_test_51Ib9SxKUsbdFeLgsdTbNltwOrH3GJoohCmfU2REYSuyKhtROx4qigfrA70eKWyS6zTHcW1DeNEOEjhze6Mc1u5s700xqeDuoSg');

exports.createConnectAccount = async (req, res) => {

  try{
    const user = await User.findById(req.user._id).exec();
    console.log("USER ==> ", user);
  
    if (!user.stripe_account_id) {
      const account = await stripe.accounts.create({
        type: "express",
      });
      console.log("ACCOUNT ===> ", account);
      user.stripe_account_id = account.id;
      user.save();
    }
    let accountLink=await stripe.accountLinks.create({
      account:user.stripe_account_id,
      refresh_url:process.env.STRIPE_REDIRECT_URL,
      return_url:process.env.STRIPE_REDIRECT_URL,
      type:"account_onboarding"
    });
    accountLink=Object.assign(accountLink,{
      "stripe_user[email]":user.email || undefined,
    })
    let link=`${accountLink.url}?${queryString.stringify(accountLink)}`;
    console.log("LOGIN LINK",link);
    res.send(link);
    

  }catch(err){
      console.log(err)
  }
 
};


exports.getAccountStatus=async(req,res)=>{
  try{
    const user=await User.findById(req.user._id).exec();
  const account=await stripe.accounts.retrieve(user.stripe_account_id)
  console.log("USER ACCOUNT RETRIEVE",account)

  const updatedUser=await User.findByIdAndUpdate(user._id,
    {
    stripe_seller:account,
  },
  {new:true}
  ).select("-password")
   .exec();
   res.json(updatedUser)
   
  }catch(err){
    console.log(err)
  }
};