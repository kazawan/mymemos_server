const db = require ('./db')


const todolist_dbAll = async (table) => {
    await db.all (`select * from ${table}`, (err, rows) => {
        console.log (rows)
    })
}


module.exports = {
    todolist_dbAll,
}

