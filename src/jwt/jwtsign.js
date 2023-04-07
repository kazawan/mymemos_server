const dotenv =require('../dotenv/dotenv')
const {jwt} = require('./jwt')
const jwtsign = (username,time)=>{
    
    const token = jwt.sign({username},process.env.KEY,{ expiresIn: time})
    return token
}

module.exports = jwtsign