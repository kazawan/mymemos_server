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
                console.log(rows)
                resolve(rows)
            }
        })
    })
}




module.exports = {
    todolist_dbAll,
}

