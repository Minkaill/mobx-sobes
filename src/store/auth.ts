import axios from "axios";
import { makeAutoObservable } from "mobx";
import { IField } from "../types/IField";
import { IUser } from "../types/IUser";
import { storeUser } from "../utils/helper";

class Auth {
  client: IUser | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async signUp(field: IField) {
    await axios
      .post("http://localhost:3002/register", field)
      .then(({ data }) => (this.client = this.client = data));
  }

  async signIn(field: IField) {
    await axios
      .post("http://localhost:3002/login", field)
      .then(({ data }) => storeUser(data));
  }

  async logout() {
    localStorage.removeItem("user");
  }
}

export default new Auth();
