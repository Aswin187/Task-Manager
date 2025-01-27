import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTasks, addtask, deletetask } from "../api/mockAPi";


export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

interface TaskState {
    tasks: Task[];
    filter: 'all' | 'completed' | 'pending';
};

const initialState: TaskState = {
    tasks: [],
    filter: 'all'
};


//from mock API
export const loadTasks = createAsyncThunk("task/loadTasks", fetchTasks);
export const createTask = createAsyncThunk("task/createTask", addtask)
export const removeTask = createAsyncThunk("task/removeTask", deletetask)

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask(state, action) {
            state.tasks.push(action.payload);
        },
        toggleTask(state, action) {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        setFilter(state, action) {
            state.filter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadTasks.fulfilled, (state, action) => {
                state.tasks = action.payload;
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.tasks.push(action.payload);
            })
            .addCase(removeTask.fulfilled, (state, action) => {
                state.tasks = state.tasks.filter(task => task.id !== action.payload);
            })
    }
})

export const { addTask, toggleTask, setFilter } = taskSlice.actions;
export default taskSlice.reducer;