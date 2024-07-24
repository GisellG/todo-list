import React, { useState } from "react";
import { TaskFormProps } from "../shared/types/types";

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(taskText.trim()) {
            addTask(taskText);
            setTaskText('');
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="New Task"    
            />
            <button type='submit'>Add</button>
        </form>
    );
};

export default TaskForm;