import { useState, useEffect } from "react";
import styles from "./ToDoInput.module.css";

export default function ToDoInput({ onAdd }) {
  const [task, setTask] = useState("");
  const [added, setAdded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    onAdd(task);
    setAdded(true);
    setTask("");
  };

  useEffect(() => {
    if (added) {
      const timer = setTimeout(() => setAdded(false), 700);
      return () => clearTimeout(timer);
    }
  }, [added]);

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введіть завдання..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.addButton}>
        {added ? (
          <img
            className={styles.added}
            src="/icons/added.svg"
            alt="Added task"
          />
        ) : (
          <img className={styles.addSvg} src="/icons/add.svg" alt="Add task" />
        )}
      </button>
    </form>
  );
}
