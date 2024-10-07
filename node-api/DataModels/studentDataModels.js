let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; 


mongooseObj.connect("mongodb://127.0.0.1/mernstack17"); 

let studentSchema = new schemaObj({
    stuName : {type: String, required : true},
    password: {type:String, required : true},
    street: String,
    mobile: Number
},
{
    versionKey: false 
})

let StuModel = mongooseObj.model("student",studentSchema);

module.exports = StuModel; 