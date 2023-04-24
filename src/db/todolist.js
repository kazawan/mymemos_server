const db = require('./db')


const todolist_dbAll = async () => {
    return new Promise((resolve, reject) => {
        db.all(`select * from TODO`, (err, rows) => {
            if (err) {
                reject({
                    code: 0,
                    msg: 'fail'
                })
            } else {
                // console.log(rows)
                resolve(rows)
            }
        })
    })
}

/**
 * * todo_user 查找某用户的todo
 */
const todolist_dbUser = async (username) => {
    return new Promise((resolve, reject) => {
        db.get(`select * from TODO where username = ?`, [username], (err, rows) => {
            if (err) {
                console.log('fail')
                reject({
                    code: 0,
                    msg: 'fail'
                })
            } else {
                // console.log(rows)
                resolve(rows)
            }
        })
    })
}

/**
 * * todo_add 添加todo
 */

const todolistAdd_dbUpdate = async (username, json) => {
    return new Promise((resolve, reject) => {
        db.run('update TODO set json =? where username =?',[json,username],(err)=>{
            if(err){
                reject({
                    code:0,
                    msg:'fail'
                })
            }else{
                resolve({
                    code:200,
                    msg:'success'
                })
            }
        })
    })

}




    module.exports = {
        todolist_dbAll,
        todolist_dbUser,
        todolistAdd_dbUpdate,
    }

