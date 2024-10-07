import * as actionTypes from "../actionTypes";

const INITIAL_STATE = {    
    Orders: [],
    error: null,
    loading: false
}


export default function OrderReducer(state = INITIAL_STATE, action) {

    console.log("Order Reducer", state, action);
    // additem, removeitem, updateitem, emptyitem
    switch(action.type) 
    {
        case actionTypes.ADD_NEW_ORDER:
 
            return {
                ...state,
                Orders: action.payload.order,
                error: null,
                loading: false
            }

        case actionTypes.CANCEL_ORDER:
            const filtOrders = state.Orders.filter(order => order._id !== action.payload.orderId)
            return {
                ...state,
                Orders:filtOrders,
                error: null,
                loading: true
            }   


        case actionTypes.FETCH_RECENT_ORDERS:
                //const filtOrders = state.Orders.filter(order => order._id !== action.payload.orderId)
            return {
                ...state,
                Orders:filtOrders,
                error: null,
                loading: false
            }

            case actionTypes.CANCEL_ORDER_SUCCESS:
                const filtCancelOrders = state.Orders.map(order => order._id === action.payload.orderId? {...order, status: 'cancelled'}: order)
            return {
                ...state,
                Orders:filtCancelOrders,
                loading: false
            }

            case actionTypes.CANCEL_ORDER_FAILURE:
                return{
                    ...state,
                    error : action.payload.error,
                    loading: false
                }


                case actionTypes.FETCH_CANCELLED_ORDERS_FAILURE:

                return{
                    ...state,
                    error: action.payload.error,
                    loading: false,
                }

        default:
            return state;


            
    }




}