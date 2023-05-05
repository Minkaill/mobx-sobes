import axios from "axios";
import { makeAutoObservable } from "mobx";
import { ITodo } from "../types/ITodo";
import { userData } from "../utils/helper";

// Получения токена для приватных запросов
const { token } = userData();

class Todo {
  tasks: ITodo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getTodo() {
    const { data } = await axios.get(`http://localhost:3002/660/todos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    this.tasks = data;
  }

  async getCheckedTodo(status: boolean | string) {
    const { data } = await axios.get(
      `http://localhost:3002/660/todos?completed=${status}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    this.tasks = data;
  }

  async addTodo(todo: ITodo) {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios.post("http://localhost:3002/660/todos", todo, config);
  }

  async removeTodo(todoId: number) {
    await axios.delete(`http://localhost:3002/660/todos/${todoId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async completeTodo(todoId: number, completed: boolean) {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios.patch(
      `http://localhost:3002/660/todos/${todoId}`,
      { completed: !completed },
      config
    );
  }
}

export default new Todo();
