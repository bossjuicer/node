const fs=require('fs');
let content ="\n umar was second caliph";

// fs.writeFile('./note.txt',content, {flag:'a+'},err=>{
//     if (err){
//         console.log("error")
//     }
// })

fs.readFile('./note.txt', 'utf8', (err,data)=>{
    console.log(data)
})