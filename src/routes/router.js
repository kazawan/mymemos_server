const express = require('express')
const router = express.Router()
const login =require('./login')
const isAuth = require('./isAuth')
const register = require('./register')
const {todo_all,todo_user,addtodo} =require ('./todo')
const routerList = [
    {
        path:'/one',
        method:'get',
        handle:(req,res)=>{
            res.send('path one handle')
        }
    },
    {
        path:'/two',
        method:'post',
        handle:(req,res)=>{
            console.log(req.body)
            res.send('path two handle')
        }
    },
    {   //登录
        path:'/login',
        method:'post',
        handle:login
    },
    {   //验证
        path:'/isAuth',
        method:'post',
        handle:isAuth
    },
    {   //注册
        path:'/register',
        method:'post',
        handle:register
    },
    {   //测试
        path:'/test',
        method:'get',
        handle:(req,res)=>{
            console.log('post test')
            res.send({
                code:200,
                msg:'post'
            })
        }
    },
    {
        path:'/todo',
        method:'post',
        handle:todo_all,
    },
    {
        path:'/todo_user',
        method:'post',
        handle:todo_user,
    },
    {
        path:'/addtodo',
        method:'post',
        handle:addtodo,
    }

]

const methodSw = (item) =>{
    switch (item.method) {
        case 'get':
            router.get(item.path,item.handle)
            break;
        case 'post':
            router.post(item.path,item.handle)
            break
        default:
            break;
    }
}
    



router.get('/',(req, res) => {
    res.send({
        code:200,
        msg:'server is on'
    })
})

routerList.forEach((item)=>{
    methodSw(item)
    
})



//导出一下
module.exports = router