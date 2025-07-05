import React from "react";

const getPriorityColor = (level) => {
  if (level === "high") return "red";
  if (level === "medium") return "orange";
  if (level === "low") return "green";
  return "black";
};
function TaskItem({ task, onToggle, onDelete }) {
  const handleToggle = () => {
    onToggle(task.id);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      onDelete(task.id);
    }
  };

  return (
    <li style={{ marginBottom: "1rem" }}>
      <h3 style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </h3>
      <p>{task.description}</p>
      <p>
        Priority:{" "}
        <strong style={{ color: getPriorityColor(task.priority) }}>
          {(task.priority || "low").toUpperCase()}
        </strong>
      </p>
      <small>
        Created:{" "}
        {task.createdAt ? new Date(task.createdAt).toLocaleString() : "Unknown"}
      </small>
      <p>
        Due:{" "}
        {task.dueDate
          ? new Date(task.dueDate).toLocaleDateString()
          : "No due date"}
      </p>

      {task.dueDate &&
        new Date(task.dueDate) < new Date() &&
        !task.completed && (
          <p style={{ color: "red", fontWeight: "bold" }}>⚠️ Overdue!</p>
        )}

      <p>Status: {task.completed ? "✅ Completed" : "❌ Pending"}</p>
      {/* <small>Created: {new Date(task.createdAt).toLocaleString()}</small> */}
      <br />
      <button onClick={handleToggle}>
        {task.completed ? "Mark as Pending" : "Mark as Completed"}
      </button>
      <button onClick={handleDelete} style={{ marginLeft: "0.5rem" }}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
