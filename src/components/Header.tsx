import { Link, useNavigate } from "react-router-dom";
import "../styles/header.scss";
import { userData } from "../utils/helper";
import { CiLogin } from "react-icons/ci";
import auth from "../store/auth";

export const Header = () => {
  const { email, token } = userData();
  const navigate = useNavigate();

  const logout = () => {
    auth.logout().then(() => navigate("/login"));
  };

  return (
    <div className="container">
      <Link to="/">
        <img src="/src/assets/react.svg" alt="" />
        <h1>Todo</h1>
      </Link>

      {token && (
        <p className="container__logout">
          {email} <CiLogin onClick={logout} />
        </p>
      )}
    </div>
  );
};
