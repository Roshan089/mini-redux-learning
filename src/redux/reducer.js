 // Assuming amount is an action type constant

const initialState = {
  tasks: [],
  amount: '0',
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, { ...action.payload, completed: false }] };
      
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
    
    case 'AMOUNT':
      return { ...state, amount: String(Number(state.amount) + action.payload) }; // Properly incrementing the amount
    
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
      
    default:
      return state;
  }
}

export default taskReducer;
