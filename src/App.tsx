import React from 'react'
import { loadTasks } from './redux/taskSlice';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Filter from './components/FilterTask';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store';

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  return (
    <div className='Task-Manger'>
      <h1>Task Manager</h1>
      <AddTask />
      <Filter />
      <TaskList />
    </div>
  );
}

export default App;
