const { todolist_dbAll } = require('../db/todolist')
const { todolist_dbUser } = require('../db/todolist')
const {todolistAdd_dbUpdate} = require('../db/todolist')
/**
 * * 获取所有todo
 * todo 添加增加todo的功能
 */
const todo_all = async (req, res) => {
    let temp = await todolist_dbAll()
    console.log(temp)
    res.send({
        code: 200,
        msg: 'success',
        data: temp[1].username
    })
}

/**
 * * 获取指定用户的todo
 */

const todo_user = async (req, res) => {
    let temp = await todolist_dbUser(req.body.username)
    // console.log(temp)
    if(temp === undefined){
        res.send({
            code: 400,
            msg: 'fail',
            data: 'no user'
        })
        return
    }else{
        res.send({
            code: 200,
            msg: 'success',
            data:temp
        })
    }
    
}

/**
 * * 添加todo
 */
const addtodo = async (req, res) => {
    console.log()
    let todo = JSON.stringify(req.body.json)
    let temp = await todolistAdd_dbUpdate(req.body.username,todo)
    res.send(temp)
    // console.log(todo)
    //  todolistAdd_dbUpdate(req.body.username,todo)
    //     .then(res=>console.log(res))

}
module.exports = {
    todo_all,
    todo_user,
    addtodo,
}