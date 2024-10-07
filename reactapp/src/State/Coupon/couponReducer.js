import * as ActionTypes from "../actionTypes"

const INITIAL_STATE={
    coupon : ""

}

export default function couponReducer(state=INITIAL_STATE, action){

    switch(action.type){

        case(ActionTypes.ADD_COUPON):
        return {...state, coupon : action.payload};

        default: return state;
    }
}
