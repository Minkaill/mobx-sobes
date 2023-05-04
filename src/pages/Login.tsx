import React from "react";
import "../styles/form.scss";
import auth from "../store/auth";
import { Link, useNavigate } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { userData } from "../utils/helper";

export const Login = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [validation, setValidation] = React.useState(false);

  const { token } = userData();

  const navigate = useNavigate();

  const [status, setStatus] = React.useState<boolean>(false);
  const [eye, setEye] = React.useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email.length > 5) {
      setValidation(false);
    }
    if (email.length < 5) setValidation(true);

    const field = {
      email,
      password,
      todos: [],
    };

    auth.signIn(field).then(() => navigate("/"));
  };

  React.useEffect(() => {
    if (token) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="content">
      <form onSubmit={onSubmit} action="" className="form">
        {status && (
          <p onClick={() => setStatus(false)} className="form__email">
            {email} <FaPencilAlt />
          </p>
        )}

        <h2 className="form__title">Вход</h2>

        <input
          placeholder="Введите email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          type="text"
          className="form__field"
        />

        {validation && (
          <p className="form__error">Email должен быть не менее 5 символов</p>
        )}

        <div className="form__password">
          <input
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            placeholder="Придумайте пароль"
            type={eye ? "text" : "password"}
            className="form__field"
          />

          <span onClick={() => setEye((prev) => !prev)}>
            {eye ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>

        <button className="form__btn" type="submit">
          Войти
        </button>

        <Link to="/register" className="form__link">
          У меня нет аккаунта
        </Link>
      </form>
    </div>
  );
};
