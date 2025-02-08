import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({}); //inputvalue

  const handleInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: false });
    console.log(inputValue.checked);
  };

  return (
    <section className="section-form">
      <form onSubmit={handleFormSubmit}>
        <div className="input-div">
          <input
            type="text"
            autoComplete="off"
            value={inputValue.content}
            onChange={(event) => handleInputChange(event.target.value)}
          />
          <button type="submit" className="input-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
