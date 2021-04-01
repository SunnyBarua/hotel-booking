const expressjwt=require("express-jwt")

exports.requireSignIn=expressjwt({
    secret:'fekseiugewuif',
    algorithms: ["HS256"]
});