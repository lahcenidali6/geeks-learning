const fs = require("fs")
const path = require("path")

function getText(){
    return new Promise((resolve,reject)=>{
        const fullPath=path.resolve("files/file-data.txt")
        fs.readFile(fullPath,'utf-8',(err,data)=>{
            if(err){
                reject(err)
            }
        else resolve(data)
        })
    })
}

async function printText() {
    try {
        const text = await getText();
        console.log(text);
    } catch (err) {
        console.error("something went wrong when reading the file!");
    }
}

module.exports=printText