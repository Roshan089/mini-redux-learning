export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task,
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: id,
});

export const toggleTask = (id) => ({
  type: 'TOGGLE_TASK',
  payload: id,
});

export const amount = (value) => ({
  type: 'AMOUNT',
  payload: value, // Ensure you're passing the value to add to amount
});