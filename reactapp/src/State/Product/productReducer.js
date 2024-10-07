import * as ActionTypes from "../actionTypes";

const Initial_State = {
    Product : {
        name : "Product",
        price : 0,
        desc : "",
        rating : ""
    },    
    Products: []
}


let productReducer = (state = Initial_State, action)=>{
  

    switch (action.type) {
        
        case ActionTypes.ADD_PRODUCTS_TOSTORE :
  
            return { ...state, Products : action.payload.products } //we update products and then retrun a new state


        default:
            return state
    }
}

export default productReducer;