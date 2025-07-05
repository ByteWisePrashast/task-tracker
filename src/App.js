import {
  getStoredTasks,
  saveTasks,
  getStoredUsername,
  saveUsername,
} from './utils/localStorage';

import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import './styles/App.css'; 


function App() {
  const [username, setUsername] = useState(getStoredUsername());
 const [tasks, setTasks] = useState(getStoredTasks);

  const [searchText, setSearchText] = useState('');
 const [darkMode, setDarkMode] = useState(false);
 useEffect(() => {
  saveTasks(tasks);
}, [tasks]);
  const handleLogin = (name) => {
  saveUsername(name);
  setUsername(name);
  };

  const handleAddTask = (task) => {
    setTasks([task, ...tasks]);
  };

  const handleToggleTask = (id) => {
  const updated = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  setTasks(updated);
};

const handleDeleteTask = (id) => {
  const updated = tasks.filter((task) => task.id !== id);
  setTasks(updated);
};

const [filter, setFilter] = useState('all');
const getFilteredTasks = () => {
  let filtered = tasks;

  if (filter === 'completed') {
    filtered = filtered.filter((t) => t.completed);
  } else if (filter === 'pending') {
    filtered = filtered.filter((t) => !t.completed);
  }

  if (searchText.trim()) {
    filtered = filtered.filter((t) =>
      t.title.toLowerCase().includes(searchText.toLowerCase()) ||
      t.description.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  return filtered;
};
const filterCounts = {
  all: tasks.length,
  completed: tasks.filter((t) => t.completed).length,
  pending: tasks.filter((t) => !t.completed).length,
};

const handleFilterChange = (selectedFilter) => {
  setFilter(selectedFilter);

  // 👇 Clear search if "all" is selected
  if (selectedFilter === 'all') {
    setSearchText('');
  }
};

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      {username ? (
        <>
        <button
  onClick={() => setDarkMode(!darkMode)}
  style={{ marginBottom: '10px' }}
>
  {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
</button>
          <h2>Welcome, {username}!</h2>
          
         <TaskForm onAdd={handleAddTask} />
         <input
  type="text"
  placeholder="Search tasks..."
  value={searchText}
  onChange={(e) => setSearchText(e.target.value)}
  style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
/>
  <TaskFilter
    filter={filter}
  onChange={handleFilterChange}
  counts={filterCounts}

  />
  <TaskList
    tasks={getFilteredTasks()}
    onToggle={handleToggleTask}
    onDelete={handleDeleteTask}
  />
          {/* We’ll show tasks next */}
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
