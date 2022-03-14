import filtersSlice from "./features/filters/filtersSlice";
import todosSlice from "./features/todos/todosSlice";


export default rootReducer = (state={}, action) => {
    return {
        todos: todosSlice(state.todos, action),
        filters: filtersSlice(state.filters, action)
    }
}