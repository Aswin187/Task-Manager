import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/taskSlice';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

const FilterTask: React.FC = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state: RootState) => state.task.filter);
    return (
        <div className='filter'>
            <button disabled={filter === 'all'} onClick={() => dispatch(setFilter('all'))}>All</button>
            <button disabled={filter === 'completed'} onClick={() => dispatch(setFilter('completed'))}>Completed</button>
            <button disabled={filter === 'pending'} onClick={() => dispatch(setFilter('pending'))}>Uncompleted</button>
        </div>
    )
}
export default FilterTask;