import React, { useState } from 'react';
import { Task } from './shared/types/types';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  /* addTask
   * Create a new task and add it into the tasks state
   * @param taskText: number
   * Is a the description of the task
   */
  const addTask = (taskText: string) => {
    const newTask: Task = {
      id: Date.now(),
      text: taskText,
      completed: false
    };

    setTasks([...tasks, newTask]);
  };

  /* toogleTaskCompletion
   * Set the completion status of a task, if the parameter has the same Id as the task it will toogle it
   * @param taskId: number
   * Is the identifier of the task that will change
  */

  const toogleTaskCompletion = (taskId: number) => {
    setTasks(tasks.map((task) => task.id === taskId ? { ...task, completed: !task.completed } : task ));
  };

  /* deleteTask
   * Filters all the task that has not he idNumber
   * @param taskId: number
   * Find the task id to be hidden
  */
  const deleteTask = (taskId: number) => {
    // Question? Does the order of taskId validation affects the performance?
    setTasks(tasks.filter(task => taskId !== task.id));
  };

  return (
    <>
      <div>
        <h1>List of tasks</h1>
      </div>
    </>
  )
};

export default App;
