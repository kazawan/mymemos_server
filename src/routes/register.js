const {dbinsert,dbFindUsername} = require('../db/crud')

const register = async (req,res)=>{
    //todo sqlite here
    // console.log('insert')
    const username = req.body.username
    const password = req.body.password
    let temp = await dbFindUsername('USER',username)
    if(temp.code === 200){
        res.send({
            code:0,
            msg:'用户已存在'
        })
    }else{
        await dbinsert('USER',username,password)
        res.send({
            code:200,
            msg:'注册成功'
        })
    }
    
    
    
   
}

module.exports = register