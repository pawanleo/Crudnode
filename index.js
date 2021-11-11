const fs = require('fs');
const path = require('path')
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`
// fs.writeFileSync(filePath,"this is a fruit")
// read file
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })
// updating
// fs.appendFile(filePath,"  and its delicious",(err)=>{
//     if(!err){console.log("file updated")}
// })
// rename
// fs.rename(filePath,`${dirPath}/mango.txt`,(err)=>{
//     if(!err){console.log("file name updated")}
// })
fs.unlinkSync(`${dirPath}/mango.txt`)