import React, { useState } from 'react';
import './task.css';

const Task = () => {
    const [taskName, setTaskName] = useState('');
    const [duration, setDuration] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleTaskNameChange = (e) => {
        setTaskName(e.target.value); 
    };

    const handleDurationChange = (e) => {
        setDuration(e.target.value);
    };

    const handleAddList = () => {
        if (taskName && duration) {
            // Create a new task object
            const newTask = {
                taskName: taskName,
                duration: duration,
            };

            // Update the tasks array with the new task
            setTasks([...tasks, newTask]);

            // Clear the form inputs
            setTaskName('');
            setDuration('');
        } else {
            alert('Please enter both Task Name and Duration.');
        }
    };

    return (
        <div className='App'>
            <h1>Todo List</h1>
            <form>
                <label>
                    Task Name:
                    <input type="text" value={taskName} onChange={handleTaskNameChange} />
                </label>
                <label>
                    Duration:
                    <input type="text" value={duration} onChange={handleDurationChange} />
                </label>
                <button type="button" onClick={handleAddList}>
                    Add List
                </button>
            </form>
            <h2>Task List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Task Name</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={index}>
                            <td>{task.taskName}</td>
                            <td>{task.duration}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Task;
