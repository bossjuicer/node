const express=require('express');
const path=require('path');

const port=8000;

const app=express();
const publicPath=path.join(__dirname,'..\\..\\public');
// console.log(publicPath)
app.use(express.static(publicPath));


// app.get('/', (req, res) => {

//     console.log("parsed")
//     res.send("Abu Bakr.")
// })
app.get('/name', (req, res) => {

    // console.log("parsed")
    // res.send("Abu Bakr was the first caliph of ummah.")
    console.log(req)
    const n=["kashif","aquib","suhail","faisal","anzer","monis","jameel"]
    res.send(n);
})
// app.get('/html', (req, res) => {

//     // console.log("parsed")
//     res.send("<h1>Abu Bakr was the first caliph of ummah.</h1><input placeholder='enter text'>")
// })
app.get('*', (req, res) => {

    // console.log("parsed")
    res.send("<h1>404 Error Not Found</h1>")
})

app.listen(port,()=>{
    console.log('listening on port')
})

