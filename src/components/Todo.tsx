import "../styles/todo.scss";
import React from "react";
import { ITodo } from "../types/ITodo";

export const Todo: React.FC<ITodo> = ({ id, title, completed }) => {
  return (
    <div className="todo" key={id}>
      <p className="todo__title">{title}</p>
      <input
        className="todo__checked"
        type="checkbox"
        checked={completed}
        readOnly
      />
    </div>
  );
};
