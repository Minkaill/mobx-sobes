import React from "react";
import { Header } from "../components/Header";
import { TodoList } from "../components/TodoList";
import { userData } from "../utils/helper";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { token } = userData();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Header />
      <TodoList />
    </>
  );
};
