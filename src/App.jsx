import { useState } from "react";
import "./App.css";
import ToDoInput from "./components/ToDoInput/ToDoInput.jsx";
import ToDoList from "./components/ToDoList/ToDoList.jsx";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <div className="mainScreen">
      <ToDoInput onAdd={handleAddTask} />
      <ToDoList tasks={tasks} />
    </div>
  );
}
