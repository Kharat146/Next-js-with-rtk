const { configureStore, combineReducers } = require("@reduxjs/toolkit");
import userReducer from "./slice";
import tasksReducer from "./tasksSlice";

const rootReducer = combineReducers({
    tasks: tasksReducer,
    user: userReducer,
  });

export const store = configureStore({
    reducer: rootReducer
})