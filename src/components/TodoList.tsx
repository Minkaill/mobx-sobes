import React from "react";
import todo from "../store/todo";
import { toJS } from "mobx";
import "../styles/todolist.scss";
import { Todo } from "./Todo";
import { ITodo } from "../types/ITodo";
import { TodoForm } from "./TodoForm";
import { userData } from "../utils/helper";
import { AppTodoModal } from "./AppTodoModal";

export const TodoList = () => {
  const { userId } = userData();
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("");
  console.log(showModal);

  const tasks = todos.filter((item) => item.userId === userId);

  React.useEffect(() => {
    todo.getTodo().then(() => setTodos(toJS(todo.tasks)));
  }, []);

  return (
    <>
      <TodoForm setShowModal={setShowModal} />
      <AppTodoModal
        setShowModal={setShowModal}
        showModal={showModal}
        setValue={setValue}
        value={value}
        todos={todos}
        setTodos={setTodos}
      />
      <div className="todo-block">
        {tasks.map((item) => (
          <React.Fragment key={item.id}>
            <Todo id={item.id} title={item.title} completed={item.completed} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
