const http=require('https');

const address ='Taj Mahal'

const url='https://api.mapboxx.com/geocoding/v5/mapbox.places/' + address +
        '.json?access_token=pk.eyJ1IjoiemVuZ2lkIiwiYSI6ImNrdG9yNTQ3aDBmZXQydXF1OXF1YnNxZTEifQ.KyGlzrlXExC9uksqLyfAuw&limit=1' 
const req=http.request(url,(res)=>{
    let allData="";
    res.on('data',(chunk)=>{
        allData += chunk.toString();
        console.log(allData);
    });

    

})

req.on("error",(err)=>{
    console.log("error occured");
})
req.end()