export interface Task {
    id: number;
    text: string;
    completed: boolean;
}

export interface TaskFormProps {
    addTask: (taskText: string) => void;
}