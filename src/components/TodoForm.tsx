import React from "react";
import "../styles/todoform.scss";

interface ITodoForm {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TodoForm: React.FC<ITodoForm> = ({ setShowModal }) => {
  return (
    <div className="form-todo">
      <button
        onClick={() => setShowModal((prev) => !prev)}
        className="form-todo__btn"
      >
        Добавить
      </button>
    </div>
  );
};
