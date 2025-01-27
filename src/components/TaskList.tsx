import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import { RootState } from '../redux/store';


const TaskList: React.FC = () => {
    const { tasks, filter } = useSelector((state: RootState) => state.task);
    const filteredTasks = tasks.filter((task) =>
        filter == "all"
            ? true
            : filter == "completed"
                ? task.completed
                : !task.completed
    );

    return (
        <ul>
            {filteredTasks.map((task) => (
                <Task key={task.id} {...task} />
            ))}
        </ul>


    );
};

export default TaskList;