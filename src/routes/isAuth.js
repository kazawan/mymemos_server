const {jwt} = require('../jwt/jwt')
const dotenv = require('../dotenv/dotenv')
const jwtverify = require('../jwt/jwtverify')
const isAuth = (req,res)=>{
    const token = req.headers.authorization.split(' ')[1]
    jwtverify(token,req,res)
}

module.exports = isAuth