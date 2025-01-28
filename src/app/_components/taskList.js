'use client'

import { TodoistApi } from "@doist/todoist-api-typescript";
import React, { useState, useEffect } from 'react'


function TaskList() {

    const [tasks, setTasks] = useState([]); // State for tasks

  // Initialize Todoist API with your token
  const api = new TodoistApi("3f3a5efc817ecde23abbfe82f242f5b180d07382");

  // Fetch tasks when the component mounts
  useEffect(() => {
    async function fetchTasks() {
      try {
        const tasks = await api.getTasks();
        setTasks(tasks.results); // Update state with fetched tasks
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }

    fetchTasks();
  }, []);

    return ( 
        <>
        <h2 className="text-xl font-semibold mb-2">Tasks</h2>
        <div className="space-y-2">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <div
                key={task.id}
                className="p-2 border rounded-md shadow-sm bg-white"
              >
                <h3 className="font-semibold">{task.content}</h3>
                <p>{task.due?.date}</p>
                <p className="text-sm text-gray-600">ID: {task.id}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No tasks available.</p>
          )}
        </div>    
        </>
     );
}

export default TaskList;