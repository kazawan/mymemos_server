const {jwt} =require('./jwt')

const jwtverify = (token,req,res)=>{
    if(token){
        jwt.verify(token,process.env.KEY,(err,decoded)=>{
            if(err){
                res.send({
                    code:401,
                    msg:'token失效'
                })
            }else{
                res.send({
                    code:200,
                    msg:'token有效',
                })
            }
        })
    }else{
        res.send({
            code:401,
            msg:'token失效'
        })
    }
}

module.exports = jwtverify