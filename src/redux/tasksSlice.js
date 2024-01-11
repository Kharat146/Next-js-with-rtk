import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      const data = action.payload;
      data.id = nanoid();
      state.tasks.push(data);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const taskIndex = state.tasks.findIndex(task => task.id === action.payload?.editTaskId);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = action.payload?.editTaskDetails;
      }
    },
  },
});

export const { addTask, removeTask, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;

