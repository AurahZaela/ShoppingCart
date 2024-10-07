import * as ActionTypes from "../actionTypes" 

const Initial_State = {messages:["Products", "Your Cart",
"Checkout cart", "Cancelled", 
"Recent",  
"Cart Items","Queue For Cancel"] , countVisible:0, dynamic:false}

const NotificationReducer = (state=Initial_State, action)=>{
    switch (action.type) {

        case ActionTypes.FETCH_NOTIFICATION:
            return {...state,
                countVisible:state.countVisible+1, 
                dynamic:action.payload}

        case ActionTypes.CANCEL_NOTIFICATION:
            return {...state,countVisible:state.countVisible}

        default:
            return state
    }
}
export default NotificationReducer