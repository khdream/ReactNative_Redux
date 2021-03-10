import { ADD_TODO, DELETE_TODO } from "../actionTypes";

const initialState = {
  todo_list_2: [
    {id: 1, task: "Do this stuff"},
    {id: 2, task: "Do another stuff"},
  ]
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
