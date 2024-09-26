import React, { useState } from "react";

const TaskList = () => {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            if (inputValue.trim()) {
                setTasks((prevTasks) => [...prevTasks, inputValue.trim()]);
                setInputValue("");
            } else {
                alert("Please enter a task.");
            }
        }
    };

    const removeTask = (taskIndex) => {
        setTasks((prevTasks) => prevTasks.filter((_, index) => index !== taskIndex));
    };

    return (
        <div className="container">
            <h1>Task List</h1>
            <input
                type="text"
                placeholder="What do you need to do?"
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                value={inputValue}
            />
            {tasks.length === 0 ? (
                <p>No tasks added</p>
            ) : (
                <ol>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            {task}
                            <span 
                                className="delete-icon" 
                                onMouseEnter={() => removeTask(index)} 
                                style={{ cursor: 'pointer' }} 
                            >
                                ✖
                            </span>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
};

export default TaskList;
