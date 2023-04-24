const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('../routes/router')
const jwtInit = require('../jwt/jwtinit')
const jwtverify = require('../jwt/jwtverify')
const log = (req, res, next) => {
    console.log('this is 中间件')
    next()
}

const pluglist = [
    cors,
    log
]



const errAuth = (err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        return res.send({
            code: 401,
            msg: "无效的token",
        });
    }
    res.send({
        code: 500,
        msg: "未知的错误",
    });
    next()
}


const useapp = (app) => {
    // app.use(log)
    app.use(cors())

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(router)
    app.use(errAuth)
    app.use(jwtInit)
    
}


module.exports = useapp

