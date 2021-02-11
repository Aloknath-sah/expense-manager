import { ADDNEW, DELETE } from "./actionTypes"

const initState={
    expText:[],
    amount:[]
}

export const reducer = (state = initState, {type, payload}) => {
    console.log(type, payload)
    switch(type){
        case ADDNEW:
            return {
                ...state,
                expText: [...state.expText, payload],
                amount: [...state.amount, Number(payload.amount)]
            }
            case DELETE:
                return {
                    ...state,
                    expText: state.expText.filter((item)=> item.id !== payload)
                }
            default:
                return state
    }
}