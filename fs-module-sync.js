const { readFileSync, writeFileSync } = require('fs');
let file1Data = readFileSync('./test-files/test-file-01.txt','utf-8');
let file2Data = readFileSync('./test-files/test-file-02.txt','utf-8');
writeFileSync('./test-files/test-file-result.txt',`${file1Data}, ${file2Data}`);
let newFileData = readFileSync('./test-files/test-file-result.txt','utf-8');
writeFileSync('./test-files/test-file-result.txt',`${file1Data}, ${file2Data}`,{ flag: 'a'});
let newFileDataAppended = readFileSync('./test-files/test-file-result.txt','utf-8');

console.log("newFileData:",newFileData);
console.log("newFileDataAppended:",newFileDataAppended);

