console.log("Creating API using express server") //importing express package and using its top level methods

const express = require('express') // using express function to initilize express application function 
const app = express()

app.get('/', function (req,res){                    
res.send('Hello World')

})

app.get('/info', function (req,res){
    res.json({
            session : "MERNSTACK",
            topic : "Express JS",
            APIname : "Give Session Info",
            build : "Using Nodemon",
            Command : "npm start",


    })
})
app.get('query', (req,res)=>{
    let qs = req.query
    console.log(qs)

    if(qs.id=25){
            res.json(qs)

    }else{

        res.send("API IS NOT READY")
    }

})

app.get('/routeParam/ : id', (req,res)=>{
let param = req.params["id"]
console.log(param)

    if(param==25){

res.send("A valid parameter!! we are fetching USERID")

    } else{


        res.send("Invalid ID. Please use Valid route parameter")
    }


})

app.get('/file', function(req,res){
    res.send(__dirname+ "/index.html")
})

app.get('*', function (req,res){
    res.send("<h1>Wild Card Response</h1>")
    
})
app.listen(3000)

console.log('API is running at http://localhost/3000')