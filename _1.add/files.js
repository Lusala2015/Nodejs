const fs = require('fs');

// Reading a file
// const data = fs.readFileSync('system.js');
// console.log(data.toString());

// writing in a file
// fs.writeFileSync('data.txt', 'magicall things happening awesomely');

//adding some more text into a file
// fs.appendFileSync('data.txt','am here good and laughing');

// how to copy a file 
// fs.copyFileSync('data.txt','data.bak.txt');

// fs.renameSync('data.bak.txt','data.old.txt');

// fs.unlinkSync('data.old.txt');// deletes a file

            //shows all the files in the directory
const dir = fs.readdirSync(__dirname);
console.log(dir);