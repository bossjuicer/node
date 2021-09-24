const request=require("request");

function forecast(lat,long, callback){
        const url=`http://api.weatherstack.com/current?access_key=d99ca41ebe9141fedbb443053bd6e3c3&query=${lat},${long}`
        request(url, (err, res) => {
    
                    if (err){
                    callback(err,res)
                    return
                 }
            const body=JSON.parse(res.body);
        if (body.error){
                 console.log("error")
             }
        else{
                console.log(`At ${body.current.observation_time} the Temperature was ${body.current.temperature}°C in ${body.location.name},${body.location.country}`)
                // console.log(lat,long)
        // console.log(body.current)
    }

});
}
let forecastCallback=(err,res)=>{
    if (err){
        console.log("error occured");
        return;
    }
    console.log(res)
}

module.exports=forecast;
// module.exports=forecastCallback;