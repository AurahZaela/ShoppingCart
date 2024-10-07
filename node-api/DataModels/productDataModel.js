let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; 


mongooseObj.connect("mongodb://127.0.0.1/mernstack17"); 

let productSchema = new schemaObj({
    name : String,
    price: Number,
    desc: String,
    rating: String,
    qty: {type: Number, Default: 1}
},
{
    versionKey: false 
})

let ProModel = mongooseObj.model("product",productSchema);

module.exports = ProModel; 