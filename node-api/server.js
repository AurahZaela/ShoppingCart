console.log("Creating API using express server")

const express = require('express') //importing express package and use top level express method
const app = express() //using express function we initialize express application

const cors = require("cors");

const adminApp = express() //created to load the request for admin/backend work
const adminRoutes = require("./Router/admin-route")

const userApp = express() //created to load the request for admin/backend work
const userRoutes = require("./Router/user-route")

const stuApp = express()
const studentRoutes = require("./Router/student-route")

const productApp = express()
const productRoutes = require("./Router/product-route")

const cartApp = express()
const cartRoute = require("./Router/cart-route")

const ordApp = express()
const ordRoute = require("./Router/order-route")

app.use(cors()) //enabling cross origin resource sharing at root level
//setting up the middleware static to handle all the static files we need to serve to client
// serve static files like images css using static middleware 
app.use('/static', express.static('public')) //localhost:9000/static/alert.js

//json middle-ware for setting request content type to json in body
app.use(express.json({limit:'2mb', extended:false})); 

app.use('/admin', adminApp)
adminApp.use('/',adminRoutes)

app.use('/user', userApp) //http://localhost:9000/user/api/signinup
userApp.use('/',userRoutes)

app.use('/student', stuApp) 
stuApp.use('/',studentRoutes)

app.use('/product', productApp) 
productApp.use('/',productRoutes)

app.use('/cart', cartApp)
cartApp.use('/',cartRoute)

app.use('/order', ordApp)
ordApp.use('/',ordRoute)

app.listen(9000)

console.log("API is ruuning at http://localhost:9000")