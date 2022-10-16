import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Task = {
  id: number;
  title: string;
  deadline: string;
  is_completed: boolean;
};

export type AddTask = {
  title: string;
  deadline: string;
  is_completed: boolean;
};

export type TasksState = {
  tasks: Task[];
};

export type AddTaskPayload = AddTask;
export type UpdateTaskPayload = Task;

const initialState: TasksState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    AddTask(state, action: PayloadAction<AddTaskPayload>) {
      const last_task = state.tasks.at(-1);
      const new_task: Task = {
        ...action.payload,
        id: last_task ? last_task.id + 1 : 1,
      };
      state.tasks = [...state.tasks, new_task];
    },
    UpdateTask(state, action: PayloadAction<UpdateTaskPayload>) {
      state.tasks = [...state.tasks].map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
  },
});
