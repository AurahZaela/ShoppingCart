import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';

//import thunk from "redux-thunk"; //is used to pipeline the dispatched objects and give us a feeling of sync execution by being async

import UserReducer from "./User/userReducer";
import studentReducer from "./Student/studentReducer"
import productReducer from "./Product/productReducer";
import cartReducer from "./Cart/cartReducer"
import couponReducer from "./Coupon/couponReducer"
import orderReducer from "./Order/orderReducer"
import NotificationReducer from "./Notification/notificationReducer";

//combine reducer is used to combine all the reducers we need in our store/state
const rootReducer = combineReducers({ 
    UserReducer, //UserReducer : UserReducer  //state.UserReducer.User.userName
    studentReducer,
    productReducer,
    cartReducer,
    couponReducer,
    orderReducer,
    NotificationReducer

})

//create or configure and export the store from this code
export default configureStore(
    {reducer : rootReducer},
    {},//inital state if we want to set from store instead of reducer
    //applyMiddleware(thunk)
)