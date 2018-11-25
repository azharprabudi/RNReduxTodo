const _initialState = {
  todos: []
};

// action type
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

// reducer
export default (state = _initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // return state.todos.push(action.payload);
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload.id)
      };
    default:
      return state;
  }
};

// action
export const addTodo = formTodo => {
  return {
    type: ADD_TODO,
    payload: formTodo
  };
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    payload: {
      id
    }
  };
};
