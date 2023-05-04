import { IHelper } from "../types/IHelper";

export const storeUser = (data: IHelper) => {
  if (data) {
    localStorage.setItem(
      "user",
      JSON.stringify({
        token: data.accessToken,
        email: data.user.email,
        userId: data.user.id,
      })
    );
  }
};

export const userData = () => {
  const strUser = localStorage.getItem("user") || '""';
  return JSON.parse(strUser);
};
