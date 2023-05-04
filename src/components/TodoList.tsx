import React from "react";
import todo from "../store/todo";
import { toJS } from "mobx";
import "../styles/todolist.scss";
import { Todo } from "./Todo";
import { ITodo } from "../types/ITodo";
import { TodoForm } from "./TodoForm";

export const TodoList = () => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  React.useEffect(() => {
    todo.getTodo().then(() => setTodos(toJS(todo.tasks)));
  }, []);

  return (
    <>
      <TodoForm />
      <div className="todo-block">
        {todos.map((item) => (
          <React.Fragment key={item.id}>
            <Todo id={item.id} title={item.title} completed={item.completed} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
