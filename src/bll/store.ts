import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import basketReducer from "./basketReducer";

let rootReducer = combineReducers({
    reducer: basketReducer
})
type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
