import React from 'react'
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { removeTask, toggleTask } from '../redux/taskSlice';

interface TaskProps {
    id: number;
    title: string;
    completed: boolean;
}

const Task: React.FC<TaskProps> = ({ id, title, completed }) => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <li className={`task${completed ? ' task--completed' : ''}`}>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleTask(id))}
            />
            <span>{title}</span>
            <button onClick={() => dispatch(removeTask(id))}>Delete</button>
        </li>
    )
}

export default Task;