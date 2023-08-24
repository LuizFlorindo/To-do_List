import { useState } from 'react';
import '../assets/css/App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => { 
    console.log(newTask);
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <div className='container'>
        <h1 className='title'>To-Do List</h1>

        <div className="task-input">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Digite uma nova tarefa"
            className='input-task'
          />
          <button onClick={addTask} className='button-addTask'>To add</button>
        </div>

        <div className="task-list">
          {tasks.map((task, index) => (
            <div key={index} className='task'>
              {task.title}
              <button>To complete</button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
