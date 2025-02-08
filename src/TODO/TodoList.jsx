import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({
  data,
  onHandledelete,
  onHandleChecked,
  checked,
}) => {
  return (
    <li className="todo-items">
      <span className={`span-text ${checked ? "checkList" : "notCheckList"}`}>
        {data}
      </span>
      <div className="btn-icon">
        <button className="check-btn" onClick={() => onHandleChecked(data)}>
          <MdCheck />
        </button>
        <button className="delete-btn" onClick={() => onHandledelete(data)}>
          <MdDeleteForever />
        </button>
      </div>
    </li>
  );
};
