// utils/localStorage.js

const TASKS_KEY = 'tasks';
const USER_KEY = 'username';

// TASKS
export const getStoredTasks = () => {
  const data = localStorage.getItem(TASKS_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveTasks = (tasks) => {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};

// USERNAME
export const getStoredUsername = () => {
  return localStorage.getItem(USER_KEY) || '';
};

export const saveUsername = (username) => {
  localStorage.setItem(USER_KEY, username);
};

// CLEAR (optional)
export const clearAllStorage = () => {
  localStorage.removeItem(TASKS_KEY);
  localStorage.removeItem(USER_KEY);
};
