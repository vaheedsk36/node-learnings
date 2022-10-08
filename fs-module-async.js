const { readFile, writeFile, appendFile } = require('fs');
readFile('./test-files/test-file-01.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
    }
    console.log("test-file-01:",result);
});

readFile('./test-files/test-file-02.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
    }
    console.log("test-file-02:",result);

});

appendFile('./test-files/test-file-result.txt',`alle files are appended`,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("appended...");
});

readFile('./test-files/test-file-result.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
    }
    console.log("test-file-result:",result);

});






