//create routes / api's for user singin-up
let express = require("express");
let studentRoute = express.Router();
const studentDataModel = require("../DataModels/studentDataModels");

//localhost:9000/user/api/signinup
studentRoute.post("/api/stuSign", (req, res)=>{
    let student = req.body 
    console.log(student)

    studentDataModel.findOne({studentName:req.body.studentName}).then((existingUser)=>{
        if(existingUser) {
            console.log("sigin in success ", existingUser);
            res.send(existingUser)
        } else { 
            let newStu = new studentDataModel(student)//req.body
            newStu.save().then((newStu)=>{//will get _id once document is created
                console.log("successful signup ", newStu);
                res.send(newStu)
            }).catch((err1)=>{
                console.log("err signup", err1);
                res.send("error while sign up")
            })
        }
    }).catch((err)=>{
        console.log("err while login ", err);
        res.send("Error while Login - existing user")
    })
})

studentRoute.get("/api/getstudent",(req, res)=>{
    studentDataModel.find()
    .then((allusers)=>{
        res.send(allusers)
    })
    .catch(()=>{
        res.send("error while fetching users")
    })
})

module.exports = studentRoute;