const { expressjwt } = require('./jwt')
const dotenv = require('../dotenv/dotenv')
const jwtInit = () => {
    return expressjwt({
        secret: process.env.KEY,
        algorithms: ['HS256']
    }).unless({path:['/login','/register','/home','/test','addtodo']})
}

module.exports = jwtInit