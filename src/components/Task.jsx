import { useState } from "react";
export default function Task({ task, onEditTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
          value={task.text}
          className="border rounded-md w-64"
          onChange={(e) => {
            onEditTask({ ...task, text: e.target.value });
          }}
        />
        <button
          className="bg-orange-500 rounded-md w-24 p-1 hover:bg-orange-800"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
         <span className="w-64">{task.text}</span>
        <button
          className="bg-orange-500 rounded-md w-24 p-1 hover:bg-orange-800"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <li className="flex gap-1">
      <input
        type="checkbox"
        name=""
        id=""
        checked={task.done}
        onChange={() => onEditTask({ ...task, done: !task.done })}
      />

      {taskContent}
      <button
        className="bg-red-500 rounded-md w-24 p-1 hover:bg-red-800"
        onClick={() => onDeleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  );
}
