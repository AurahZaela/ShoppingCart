import * as ActionTypes from "../actionTypes"


export const FetchNotification = (toggle) =>{
    return{type: ActionTypes.FETCH_NOTIFICATION, payload:toggle}
}

export const CancelNotification = () =>

{
    return{type: ActionTypes.CANCEL_NOTIFICATION}
}