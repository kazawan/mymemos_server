const jwtsign = require('../jwt/jwtsign')
const {dbFindUsername} = require('../db/crud')
/**
 * 
 * //todo 添加sqlit
 * todo 添加失败
 */



const login = async (req,res) =>{
    const {username,password} = req.body
    let temp = await dbFindUsername('USER',username)
    // console.log(temp.data)
    if(username === temp.data.username  && password === temp.data.password){
        const token = jwtsign(username,60*60)
        res.send({
            code:200,
            msg:'登陆成功',
            token:'Bearer' + ' ' + token,
            username:username
        })
    }else{
        res.send({
            code:401,
            msg:'用户名或密码错误',
            
        })
    }
    
}

module.exports = login