import React, { useState } from "react";

const TodoList = () => {
    const [taskInput, setTaskInput] = useState("");
    const [taskArray, setTaskArray] = useState([]);

    const addTask = (key) => {
        if (key === "Enter") {
            if (taskInput !== "") {
                setTaskArray((prevTasks) => [...prevTasks, taskInput]);
                setTaskInput("");
            } else {
                alert("Please enter a task.");
            }
        }
    };

    const removeTask = (index) => {
        setTaskArray((prevTasks) =>
            prevTasks.filter((_, i) => i !== index)
        );
    };

    return (
        <div className="container">
            <h1>todos</h1>
            <input
                type="text"
                id="task"
                placeholder="What do you need to do?"
                onChange={(e) => setTaskInput(e.target.value)}
                onKeyDown={(e) => addTask(e.key)}
                value={taskInput}
            />
            {taskArray.length === 0 ? (
                <p>No tasks added</p>
            ) : (
                <ol>
                    {taskArray.map((task, index) => (
                        <li key={index}>
                            {task}
                            <span className="delete-icon" onClick={() => removeTask(index)}> ✖ </span>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
};

export default TodoList;
