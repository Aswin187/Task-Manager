import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store';
import { createTask } from '../redux/taskSlice';

const AddTask: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [title, setTitle] = useState('');

    const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title.trim()) {
            dispatch(createTask(title))
            setTitle('');
        }
    }

    return (
        <form onSubmit={handleChange}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter task" />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTask;