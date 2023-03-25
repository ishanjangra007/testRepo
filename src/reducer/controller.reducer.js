import { HIDE_DATA, SHOW_DATA } from "../types/controller.types";

const ini_state=true;
const controllerReducer=(state=ini_state,action)=>{
 switch(action.type){
    case SHOW_DATA:
        return action.payload.view;
        case HIDE_DATA:
            return action.payload.view;
            default :
            return state;
 }
}

export default controllerReducer;