import axios from "axios";
import { makeAutoObservable } from "mobx";
import { ITodo } from "../types/ITodo";
import { userData } from "../utils/helper";

// Получения токена для запроса чтения списка дел
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

  async addTodo(todo: ITodo) {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios.post("http://localhost:3002/660/todos", todo, config);
  }

  removeTodo() {}

  completeTodo() {}
}

export default new Todo();
