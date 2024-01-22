import React from "react";
import Task from "./Task.jsx";

export default function TaskList({ tasks, onEditTask, onDeleteTask }) {
  return (
    <ul className="mt-4 space-y-2">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}
