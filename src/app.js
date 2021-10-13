// / https://newsapi.org/v2/top-headlines?country=eg&apiKey=888fcce93cdf457fb90f0b80790e1650

const express= require('express');
const hbs = require('hbs')
const app = express()
const path = require('path')
const publicDirectory= path.join(__dirname,'../public')
const viewDirectory=path.join(__dirname,'../templates/views')
const port = 3000 ; 
app.use(express.static(publicDirectory))
///// request data 
const request = require('request')


const url = "https://newsapi.org/v2/top-headlines?country=eg&apiKey=888fcce93cdf457fb90f0b80790e1650"
app.set('view engine','hbs')
app.set('views',viewDirectory)

app.get('/',(req,res)=>{

request({url,json:true},(error,response)=>{
    if(error){
        console.log('Unable to connect to News service')
       }
   
       else if(response.body.code){
        console.log('wrong in access key')
       }
       else if(response.body.totalResults==0){
        console.log('wrong country name')
        }
       else{
        
            res.render('index',{
                
                // title:response.body.articles[0].title,
                // description:response.body.articles[0].description,
                // url:response.body.articles[0].urlToImage
                                newss:response.body.articles



             })
            
       }
   
    
})

            
    

})

// app.get('/',(req,res)=>{
//         news((error,data)=>{
//             if(error){
//                 console.log(error)
//                 return res.send({error:error})
//             }
//             res.render('index',{
//                data
//             })
//         })
//     })


// app.get('/',(req,res)=>{
//     res.render('index',{
//         title:"title for test page ",
//         name : "name of test hbs"
//     })
// })
app.get('*',(req,res)=>{
    res.render('error')
})

app.listen(port,()=>{
    console.log('server is running')
})

