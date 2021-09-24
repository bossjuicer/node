const express=require('express');
const path=require('path');
const hbs=require('hbs');
const gecoding=require('./gecoding');
const forecast=require('./forecast');

const port=8000;

const app=express();
const publicPath=path.join(__dirname,'..\\..');
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'..\\..\\views\\template'))
hbs.registerPartials(path.join(__dirname,'..\\..\\views\\partials'))
app.use(express.static(publicPath));

app.get('',(req, res)=>{
    res.render('index',{
        cur_year: new Date().getFullYear(),
    })
    
}) 
app.get('/about',(req, res)=>{
    res.render('about',{
        cur_year: new Date().getFullYear(),
    })
    
}) 
app.get('/weather',(req, res)=>{
    res.render('weather',{
        cur_year: new Date().getFullYear(),
    })
    
}) 
// app.get('/', (req, res) => {

//     console.log("parsed")
//     res.send("Abu Bakr.")
// // })
// app.get('/name', (req, res) => {

//     // console.log("parsed")
//     // res.send("Abu Bakr was the first caliph of ummah.")
//     // console.log(req)
//     const n=["kashif","aquib","suhail","faisal","anzer","monis","jameel"]
//     res.send(n);
// })

app.get('/gw',(req, res)=>{
    if (!req.query.address){
        res.send({
        error:"Please provide an valid address",
    });
    
    return;
}
    gecoding(req.query.address,(err,res)=>{
    if (err){
        console.log(err);
        return;
    }
    let lat=res.body.features[0].center[1];
    let long=res.body.features[0].center[0]
    let place=res.body.features[0].place_name;
    // console.log(res.body.features)
    // console.log(`The place is ${place}`)
    // res.send({p:`The place is ${place}`})
    forecast(lat,long,(err,response)=>{
        if (err){
            console.log(err);
            return;
        }
        
        res.send({
            temp:response,
        });
        
    });
})

    // res.send({w:"Sunny in Raja Ka Tajpur"});
    
});


app.get('/html', (req, res) => {

    // console.log("parsed")
    res.send("<h1>Abu Bakr was the first caliph of ummah.</h1><input placeholder='enter text'>")
})
app.get('*', (req, res) => {

    // console.log("parsed")
    res.send("404 Error Not Found")
    // console.log(app.set('views',path.join(__dirname,'..\\..\\views\\template')))
})

app.listen(port,()=>{
    console.log('listening on port')
    // console.log(publicPath)
    // console.log(pa)
})