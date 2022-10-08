const { readFile } = require("fs");

const getText = (path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf-8',(err,data)=>{
            if(err){
                reject(err);
            }
            resolve(data);
        })
    })
}

getText('./test-files/test-file-01.txt').then((data)=>{
    console.log(data);
}).catch((err)=>console.log(err));