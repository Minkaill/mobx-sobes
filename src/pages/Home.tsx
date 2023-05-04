import todo from "../store/todo";
import React from "react";
import { Header } from "../components/Header";
import { userData } from "../utils/helper";
import { toJS } from "mobx";
import { TodoList } from "../components/TodoList";

export const Home = () => {
  const { userId } = userData();
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    todo.getTodo(userId).then(() => setTodos(toJS(todo.tasks)));
  }, []);

  return (
    <>
      <Header />
      <TodoList />
    </>
  );
};
