// 05-02-2024 - Recentorder Page 
// Upon MakePayment Click
// Save the cart to RecentOrders collection (should have userid, order, dateTime)
// Make API to Save and Fetch from RecentOrders
// Make a component RecentOrders to Show all previous Orders of current user
// Add a button to Cancel (like) we have remove in CartComponent and then save again, 
// order can be cancelled within 2 days after that it should be marked delivered

import * as ActionTypes from "../actionTypes";




export const addOrder = (order)=>({
    type: ActionTypes.ADD_NEW_ORDER,
    payload: {order} 
})


export const cancelOrder = (orderId)=>({
    type: ActionTypes.CANCEL_ORDER,
    payload: {orderId} 
})


export const saveOrderToDb = (userid,cart)=>{

    console.log("Tryin to Save the Order...")

    return function(dispatch) {
        //dispatch(loading(true));
        window.fetch("http://localhost:9000/order/api/saveUserOrder",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid, cart})})
        .then (response => response.json())
        .then (orderresponse => {
            console.log("response ", orderresponse);

        })
        .catch((err)=>{
            console.log("Error Saving Order", err);
        }) 
    }
}



export const cannedOrd = (orderId)=>{

    console.log("Sending to Cancel Order..")

    return function(dispatch) {
        window.fetch("http://localhost:9000/order/api/cancelledUserOrder",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({orderId})})
        .then (response => response.json())
        .then (orderresponse => {
           dispatch({type: ActionTypes.CANCEL_ORDER_SUCCESS, payload: {orderId}})

        })
        .catch((err)=>{
            dispatch({type: ActionTypes.CANCEL_ORDER_FAILURE, payload:{error: err.toString()}})
        })  
    }
}


export const getUserOrders = (userid) => {
        
    return function(dispatch) {
        console.log("Get List Orders");
        window.fetch("http://localhost:9000/order/api/getUserOrder",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid})})
        .then (response => response.json())
        .then (userorderresponse => {
            console.log("response - get user Order ", userorderresponse);
        
                let action = addOrder(userorderresponse);
                dispatch(action);    
            })                
                       
        
        .catch((err)=>{
            console.log("Error While Login", err)
        })  
    }       
}



export const getCanOrders = (userid) => {
        
    return function(dispatch) {
        console.log("Getting cancelled Orders");
        window.fetch("http://localhost:9000/order/api/getCancelledOrder",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid})
        })
        .then (response => response.json())
        .then (canOrderResponse => {
        
            dispatch({ type: ActionTypes.FETCH_CANCELLED_ORDERS_SUCCESS, payload: canOrderResponse });
            })                
                       
        .catch(err =>{
            console.log("Mission Failed")
            dispatch({ type: ActionTypes.FETCH_CANCELLED_ORDERS_FAILURE, payload: { error: err.toString() } })
        
        })
        }  
}       


