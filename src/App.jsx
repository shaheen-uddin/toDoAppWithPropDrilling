import AddTask from "./components/AddTask"
import TaskList from "./components/TaskList";
import { initialTasks } from "./utils/utils"
import { useState } from "react"

function App() {
 const [tasks, setTasks] = useState(initialTasks);
 //here reducer will be used.
 const handleAddTask = (task) => {
   setTasks([...tasks, {id: crypto.randomUUID(), text: task, done: false}])
 }

 const handleEditTask = (task) => {
   setTasks(tasks.map(t => t.id === task.id ? task: t))
 }
 const handleDeleteTask = (taskId) => {
   setTasks(tasks.filter(t => t.id !== taskId))
 }
 console.log(tasks)
  return (
    <div className="max-w-2xl mx-auto h-screen py-10">
      <AddTask onAdd= {handleAddTask}/>
      <TaskList tasks={tasks} onEditTask={handleEditTask} onDeleteTask={handleDeleteTask}/>
      
    </div>
  )
}

export default App
