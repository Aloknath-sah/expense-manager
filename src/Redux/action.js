import {ADDNEW, DELETE} from './actionTypes'

export const addNewText = (payload)=>({
    type: ADDNEW,
    payload
})

export const deleteText = (payload)=>({
    type: DELETE,
    payload
})