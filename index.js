const jwt = require ("jsonwebtoken");
const secret = "mysecret";
const token = jwt.sign(
    {
       username: "sneha" ,
       role: "student"
    },
    secret
);

console.log("JWT Token:");
console.log(token);