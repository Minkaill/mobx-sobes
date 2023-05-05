import "../styles/todo.scss";
import React from "react";
import { ITodo } from "../types/ITodo";
import todo from "../store/todo";

interface Todo {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  id: number;
  title: string;
  completed: boolean;
}

export const Todo: React.FC<Todo> = ({
  id,
  title,
  completed,
  setTodos,
  todos,
}) => {
  const removeTask = () => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
    todo.removeTodo(id);
  };

  const completedTask = () => {
    const toggleTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !completed };
      }
      return todo;
    });
    setTodos(toggleTodo);

    todo.completeTodo(id, completed);
  };

  return (
    <div className="todo" key={id}>
      <p
        style={{
          color: completed ? "#ff9900" : "black",
          textDecoration: completed ? "line-through" : "none",
        }}
        className="todo__title"
      >
        {title}
      </p>
      <div className="todo__function">
        <button onClick={() => removeTask()} className="todo__btn">
          X
        </button>
        <input
          className="todo__checked"
          type="checkbox"
          checked={completed}
          onChange={() => completedTask()}
        />
      </div>
    </div>
  );
};
