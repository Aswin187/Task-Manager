import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";
export const fetchTasks = async () => {
    const reponse = await axios.get(API_URL);
    return reponse.data.map((task: any) => ({
        id: task.id,
        title: task.title,
        completed: task.completed
    }));
};

export const addtask = async (title: string) => {
    const response = await axios.post(API_URL, { title, completed: false });
    return response.data;
};

export const deletetask = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
};