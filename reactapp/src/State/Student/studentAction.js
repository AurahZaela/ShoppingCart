//we will define actions to be used by action creator and dispatchers to dispatch to store
import * as ActionTypes from "../actionTypes";
import axios from "axios";
//call back function to define type and payload to be used in reducer
export const AddStuToStore = (newStu)=>{
    return {
        type : ActionTypes.AddUserToStore,
        payload : newStu
    }
}


//server call

export const SaveStuToDB = (newStu)=>{
    return (dispatch)=>{
        axios.post("http://localhost:9000/user/api/stuSign",//uri or end point of singninup api
                newStu //passing into the body req.body
            )
            .then((savedStu)=>{
                let signdStu = savedStu.data;
                console.log(signdStu)
                dispatch(AddStuToStore(signdStu))
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}