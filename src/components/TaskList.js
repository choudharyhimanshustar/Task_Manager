import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer.jsx';
import Header from '../Header.jsx';
const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from local storage on component mount
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    // Save updated tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);

  };

  return (

    <div className="main-container">
      <div className="background-container">
        <Header />
        <div className="taskList container mt-4" style={{ background: '#C38D9E', padding: '20px', borderRadius: '8px' }}>
          <h1 className="mb-4 text-center">Tasks List</h1>
          <ul className="list-group">
            {tasks.map(task => (
              <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="tasks" >

                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleComplete(task.id)}
                    className="me-3 "
                  />

                  <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className="task">{task.name}</span>


                  <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className="date">{task.date}</span>


                </div>
                <div >
                  <button onClick={() => handleDelete(task.id)} className="btn btn-danger me-2 buttons">Delete</button>
                  <Link to={`/edit/${task.id}`} className="btn btn-primary buttons">Edit</Link>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-center mt-3">
            <Link to="/add" className="btn btn-success">Add Task</Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default TaskList;
