import React from "react";
import "../styles/todoform.scss";
import todo from "../store/todo";
import { ITodo } from "../types/ITodo";
import { toJS } from "mobx";

interface ITodoForm {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TodoForm: React.FC<ITodoForm> = ({ setShowModal, setTodos }) => {
  const [checked, setChecked] = React.useState<boolean | string>("All");
  const [select, setSelect] = React.useState(false);

  React.useEffect(() => {
    if (checked === "All") {
      todo.getTodo().then(() => setTodos(toJS(todo.tasks)));
    } else {
      todo.getCheckedTodo(checked).then(() => setTodos(toJS(todo.tasks)));
    }
  }, [checked]);

  return (
    <div className="form-todo">
      <div className="form-todo__sort">
        <button
          onClick={() => setSelect((prev) => !prev)}
          className="form-todo__mobile-btn"
        >
          {(checked === "All" && "Все") ||
            (checked === true ? "Выполненные" : "Невыполненные")}
        </button>

        {select && (
          <div className="form-todo__btns">
            <button
              onClick={() => [setChecked("All"), setSelect((prev) => !prev)]}
            >
              Все
            </button>
            <button
              onClick={() => [setChecked(true), setSelect((prev) => !prev)]}
            >
              Выполненные
            </button>
            <button
              onClick={() => [setChecked(false), setSelect((prev) => !prev)]}
            >
              Невыполненные
            </button>
          </div>
        )}
      </div>

      <button
        onClick={() => setShowModal((prev) => !prev)}
        className="form-todo__btn"
      >
        Добавить
      </button>
    </div>
  );
};
