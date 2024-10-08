import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, toggleTask } from './redux/action';
import Bank from './component/bank';

function TodoList() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    dispatch(addTask({ id: Date.now(), text: newTask }));
    setNewTask('');
  };

  return (
    <>
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
            <button onClick={() => dispatch(toggleTask(task.id))}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    <Bank/>
    </>
  );
}

export default TodoList;
