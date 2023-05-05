import React from "react";
import { userData } from "../utils/helper";
import { ITodo } from "../types/ITodo";
import todo from "../store/todo";
import "../styles/modal.scss";

interface IModal {
  value: string;
  setValue: any;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export const AppTodoModal: React.FC<IModal> = ({
  value,
  todos,
  setTodos,
  showModal,
  setShowModal,
  setValue,
}) => {
  const { userId } = userData();

  const handleAddTodo = () => {
    const newTodo = {
      userId,
      id: Date.now(),
      title: value,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    todo
      .addTodo(newTodo)
      .then(() => setShowModal((prev) => !prev))
      .then(() => setValue(""));
  };

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close"
              onClick={() => setShowModal((prev) => !prev)}
            >
              &times;
            </span>
            <div className="modal-body">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue(e.target.value)
                }
              />
            </div>
            <div className="modal-footer">
              <button onClick={() => setShowModal((prev) => !prev)}>
                Закрыть
              </button>
              <button type="submit" onClick={() => handleAddTodo()}>
                Добавить
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
