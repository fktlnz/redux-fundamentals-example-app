import { combineReducers } from "redux";
import filtersSlice from "./features/filters/filtersSlice";
import todosSlice from "./features/todos/todosSlice";

const rootReducer = combineReducers({
    todos: todosSlice,
    filters: filtersSlice
})
export default rootReducer