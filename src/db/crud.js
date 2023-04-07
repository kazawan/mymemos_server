const db = require('./db')

const dbAll = async(table) =>{
    await db.all(`select * from ${table}`, (err, rows) => {
        console.log(rows)
    })
}

const dbinsert = async (table,username,password) =>{
    await db.run(`insert into ${table}(username,password) values(?,?)`,[username,password],(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('insert success')
        }
    })
}

const dbFindUsername = async (table,username) =>{
    return new Promise((resolve,reject)=>{
        db.get(`select * from ${table} where username = ? `, [username] , (err,data)=>{
            if(err){
                reject({
                    code:0,
                    msg:'fail'
                })
            }else{
                if(data === undefined){
                    resolve({
                        code:0,
                        msg:'fail'
                    })
                }else{
                    resolve({
                        code:200,
                        msg:'success',
                        data:data
                    })
                }
                
            }
        })
    })
     
    
}

module.exports = {
    dbAll,
    dbinsert,
    dbFindUsername,
}
