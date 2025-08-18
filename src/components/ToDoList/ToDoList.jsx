import styles from "./ToDoList.module.css";

export default function ToDoList({ tasks }) {
  return (
    <div className={styles.listTasks}>
      {tasks.length > 0
        ? tasks.map((task, i) => (
            <div key={i} className={styles.taskItem}>
              <span className={styles.taskText}>{task}</span>
              <div className={styles.deleteButtonWrapper}>
                <button className={styles.deleteButton}>
                  <img
                    className={styles.deleteSvg}
                    src="/icons/delete.svg"
                    alt="Delete task"
                  />
                </button>
                <button className={styles.editButton}>
                  <img
                    className={styles.editSvg}
                    src="/icons/edit.svg"
                    alt="Edit task"
                  />
                </button>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
}
