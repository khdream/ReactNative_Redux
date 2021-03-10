import { ADD_TODO, DELETE_TODO } from "../actionTypes";

const initialState = {
  todo_list_2: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, task } = action.payload
      return {
        ...state,
        todo_list_2: [ ...state.todo_list_2, { id, task }]
      };
    }
    case DELETE_TODO: {
      const { id } = action.payload
      return {
        ...state,
        todo_list_2: state.todo_list_2.filter((todo) => todo.id != id)
      };
    }
    default:
      return state;
  }
}
