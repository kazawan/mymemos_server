const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('mymemos', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`mymemos DateBase created`)
    }
})



//语法
//creat table if not exists [*TABLE NAME*]([OPTION]),CALLBACK
db.run(`create table if not exists USER (id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    password TEXT )`, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`table:USER created`);
    }
})

// db.get(`select * from USER where username = ? `, [''] , (err,data)=>{
//     if(err){
//         return 
//     }else{
//         console.log(data)
//     }
// })





module.exports = db