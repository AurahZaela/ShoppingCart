let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; 


mongooseObj.connect("mongodb://127.0.0.1/mernstack17"); 

let orderSchema = new schemaObj({
    userid: {type: String, required:true},
    cart: {type: Object, required:true},
    dateTime: {type: Date, default:Date.now},
    status: { type: String, required: true, default: 'placed' }
},
{
    versionKey: false 
})

let OrdModel = mongooseObj.model("order",orderSchema);

module.exports = OrdModel; 