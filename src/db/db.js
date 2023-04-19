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


db.run(`create table if not exists TODO (id INTEGER PRIMARY KEY AUTOINCREMENT,username TEXT,json TEXT)`, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`table:TODO created`);
    }
})

let todo = {
    "2023-4-19":{
        todo:[
            {
                id:1,
                title:'test',
            },
            {
                id:2,
                title:'test2',
            }
        ]
    },
}

// db.run(`insert into TODO (username,json) values(?,?)`, ['kazawan', JSON.stringify(todo)], (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(`insert success`);
//     }
// })

/**
 * todo 测试用
 * todo 当有用户新建账号时，需要在TODO表中插入一条数据包含欢迎信息
 */
db.all (`select * from TODO`, (err, rows) => {
    let temp = JSON.parse(rows[0].json)
    console.log (rows[0].json)
    console.log(temp['2023-4-19'].todo)
})


// db.get(`select * from USER where username = ? `, [''] , (err,data)=>{
//     if(err){
//         return 
//     }else{
//         console.log(data)
//     }
// })





module.exports = db