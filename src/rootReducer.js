import {combineReducers} from "redux";
import {controllerReducer} from "./reducer/controller.reducer";

const rootReducer = combineReducers({
    control:controllerReducer
});
export default rootReducer;