'use client'

import { useState } from "react";

const Home: React.FC = () => {
  // Define the types for the state variables
  const [task, setTask] = useState<string>(""); 
  const [tasks, setTasks] = useState<string[]>([]); 

  // Function to add a new task
  const addTask = () => {
    if (task.trim()) { 
      setTasks([...tasks, task]); 
      setTask(""); 
    }
  };

  // Function to delete a task
  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); 
    setTasks(updatedTasks); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md sm:max-w-lg">
        <h1 className="text-2xl font-extrabold text-gray-800 mb-4 text-center">
          Simple TO-DO Application
        </h1>

        {/* Input field to add a new task */}
        <div className="flex mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a new task"
            className="flex-1 px-4 py-2 border rounded-l-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-950"
          />
          <button
            onClick={addTask}
            className="bg-cyan-900 hover:bg-cyan-600 text-white px-4 py-2 rounded-r-md transition duration-200"
          >
            Add Task
          </button>
        </div>

        {/* Display tasks */}
        <ul className="space-y-2">
          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-sm"
            >
              <span className="text-gray-700">{t}</span>
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 hover:text-red-600 transition duration-200"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
