import axios from "axios";
import { makeAutoObservable } from "mobx";

class Todo {
  tasks = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getTodo(userId: number) {
    await axios
      .get(`http://localhost:3002/users/${userId}`)
      .then(({ data }) => (this.tasks = this.tasks = data.todos));
  }

  addTodo() {}

  removeTodo() {}

  completeTodo() {}
}

export default new Todo();
