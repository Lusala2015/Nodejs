// why you should use strings 
// const fs = require (' fs ');
// fs.readFile('./largerfile.txt', (err,file)=>{
//    if(err)
//       console.log(err);
//    else{
//       console.log(file);
//    }
// });

// const fs = require ('fs');
// const readStream = fs.createReadStream('./example.txt','utf8');
// const writeStream = fs.createWriteStream('example2.txt');
// readStream.on('data',(chunk)=>{
//    console.log(chunk);
// });

const fs = require ('fs');
const readStream = fs.createReadStream('./largerfile.txt','utf8');
readStream.on('data',(chunk)=>{
   console.log(chunk);
});