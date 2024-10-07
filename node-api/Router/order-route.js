let express = require("express");
let router = express.Router({}),
OrderDataModel = require("../DataModels/orderDataModel");

//order api's
router.post("/api/saveUserOrder",(req, res)=>{
    console.log("Saving the Orders")
    let newOrder = new OrderDataModel({
        userid: req.body.userid,
        cart: req.body.cart,
        dateTime: new Date(),
        status: 'placed'
    });

    newOrder.save().then((data)=>{                                  
        res.json(data);
    }).catch((err)=>{
        res.send("Error Occurred"+ err);
    });
});   
                

router.post("/api/getUserOrder",(req, res)=>{
    OrderDataModel.find({userid: req.body.userid})
        .then((orders) => { res.json(orders) })
        .catch((err)=>{res.send("Error Occurred"+ err);})
});

// Cancel an existing order
router.post("/api/cancelledUserOrder", (req, res) => {
    
    OrderDataModel.findByIdAndUpdate(
        req.body.orderId,
        { status: 'cancelled' },
        { new: true }
    )
    .then(updatedOrder => {
        if (!updatedOrder) {
            return res.send("Order not found.");
        }
        res.json(updatedOrder);
    })
    .catch(err => {
        res.status.send("Error Occurred: " + err);
    });
});

// Fetch all cancelled orders for a specific user
router.post("/api/getCancelledOrder", (req, res) => {
    OrderDataModel.find({ userid: req.body.userid, status: 'cancelled' })
        .then(cancelledOrders => { 
            res.json(cancelledOrders); 
        })
        .catch(err => {
            res.status.send("Error Occurred: " + err);
        });
});


module.exports = router;