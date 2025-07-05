import React, { useState } from 'react';

function TaskForm({ onAdd }) {
  const [tag, setTag] = useState('');

  const [dueDate, setDueDate] = useState('');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

 const newTask = {
  id: Date.now(),
  title,
  description,
  priority,
  dueDate,
  tag,
  completed: false,
  createdAt: new Date().toISOString(),
};


    onAdd(newTask); // Pass task to parent
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
  type="date"
  value={dueDate}
  onChange={(e) => setDueDate(e.target.value)}
  required
/>   

     <input
  type="text"
  placeholder="Enter tag (e.g., Work, Personal)"
  value={tag}
  onChange={(e) => setTag(e.target.value)}
/>
     
      <select
  value={priority}
  onChange={(e) => setPriority(e.target.value)}
  required
>
  <option value="high">High Priority 🔴</option>
  <option value="medium">Medium Priority 🟡</option>
  <option value="low">Low Priority 🟢</option>
</select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
