import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/styles.scss";
import { BrowserRouter } from "react-router-dom";

const $root = document.getElementById("root");

ReactDOM.createRoot($root as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
