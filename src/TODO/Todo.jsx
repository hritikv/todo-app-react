import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoDateTime } from "./TodoDateTime";
import { TodoList } from "./TodoList";
import "./Todo.css";
import { getLocalStorageData, setLocalStorageData } from "./LocalStorageData";

function Todo() {
  const [task, setTask] = useState(() => getLocalStorageData()); //stored data

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content.trim()) {
      alert("Task cannot be empty!");
      return;
    }

    const ifcontentMatched = task.find(
      (currTask) => currTask.content === content
    );
    if (ifcontentMatched) {
      alert("Task already exists!");
      return;
    }

    // Add the new task
    setTask((prev) => [...prev, { id, content, checked }]);
  };

  //add data to local storage
  setLocalStorageData(task);

  //delete function
  const handleDelete = (value) => {
    const deletedtask = task.filter((currTask) => currTask.content !== value);
    setTask(deletedtask);
  };

  //delete all function
  const clearAll = () => {
    setTask([]);
  };

  //todo handleChecked function
  const handleChecked = (val) => {
    console.log(val);
    const checkedTask = task.map((currTask) => {
      if (currTask.content === val) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });
    setTask(checkedTask);
  };

  return (
    <section className="">
      <h1>Todo list</h1>
      <TodoDateTime />
      <TodoForm onAddTodo={handleFormSubmit} />
      <div className="ul-list">
        <ul>
          {task.map((currTask) => {
            return (
              <TodoList
                key={currTask.id}
                data={currTask.content}
                checked={currTask.checked}
                onHandledelete={handleDelete}
                onHandleChecked={handleChecked}
              />
            );
          })}
        </ul>
      </div>
      <div className="clear-btn">
        <button className="clear" onClick={clearAll}>
          Clear All
        </button>
      </div>
    </section>
  );
}
export default Todo;
