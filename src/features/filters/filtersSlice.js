function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

const initialState = {
    status: 'All',
    colors: []
}

const appReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'filters/statusFilterChanged': {
            return {
                // Copy the whole state
                ...state,
                // Overwrite the filters value
                filters: {
                // copy the other filter fields
                ...state.filters,
                // And replace the status field with the new value
                status: action.payload
                }
            }    
        }
        default: 
            return state
    }
}

export default appReducer