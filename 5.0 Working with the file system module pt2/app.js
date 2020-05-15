const fs = require ('fs');
// fs.mkdir('tutorial',(err)=>{
//     if (err)
//         Console.log(err);
//     else{
//         fs.writeFile('./tutorial/example.txt', '1234',(err)=>{
//         if (err)
//             Console.log(err);
//         else
//             console.log('sucessfully created file');  
//         })
//     }
        // fs.rmdir('tutorial',(err)=>{
        // if (err)
        //     Console.log(err);
        // else
        //     console.log(' sucessfully deleted the folder');  
        // });  
//  

// fs.unlink('./tutorial/example.txt',(err)=>{
//     if (err)
//     console.log(err)
//     else {
//         fs.rmdir('tutorial',(err)=>{
//             if (err)
//                 console.log(err)
//             else{
//                 console.log('file removed successfully');
//             }
//         });    
//     }
// });
fs.readdir('example',(err, files)=>{
    if (err)
        console.log(err)
    else{
        for (let file of files){
            fs.unlink('./example/'+ file, (err)=>{
                if (err)
                    console.log(err)
                else{
                        console.log('successfully deleted file');
                }
            })
        }
    }
})
