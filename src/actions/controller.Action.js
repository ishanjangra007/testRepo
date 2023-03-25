import { HIDE_DATA, SHOW_DATA } from "../types/controller.types"

export const showData=(data)=>{
 return {
    type:SHOW_DATA,
    payload:{
        view:data
    }
 }
}

export const hideData=(data)=>{
 return {
    type:HIDE_DATA,
    payload:{
        view:data
    }
 }
}