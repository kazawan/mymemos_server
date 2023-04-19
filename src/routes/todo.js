const {todolist_dbAll} =require ('../db/todolist')

/**
 * * 获取所有todo
 * todo 添加增加todo的功能
 */
const todo_all = async (req,res) =>{
    let temp = await todolist_dbAll()
    res.send({
        code:200,
        msg:'success',
        data:JSON.parse(temp[0].json)
    })
}

module.exports = {todo_all}