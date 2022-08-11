import { combineReducers } from "redux";
import calculatorReducer from "./features/calculator/calculatorSlice";

const rootReducer = combineReducers({
  calculator: calculatorReducer,
});

export default rootReducer;
