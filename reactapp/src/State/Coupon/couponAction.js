import * as ActionTypes from "../actionTypes";

export const addCoupon = (coupon)=>({
    
    type:ActionTypes.ADD_COUPON,
    payload: coupon
});