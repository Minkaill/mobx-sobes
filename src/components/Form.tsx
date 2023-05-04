import React from "react";
import "../styles/form.scss";
import auth from "../store/auth";
import { Link, useNavigate } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const Form = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [validation, setValidation] = React.useState(false);

  const navigate = useNavigate();

  const [status, setStatus] = React.useState<boolean>(false);
  const [eye, setEye] = React.useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const field = {
      email,
      password,
      todos: [],
    };

    auth.signUp(field).then(() => navigate("/login"));
  };

  const validationEmail = () => {
    if (email.length > 5) {
      setStatus(true);
      setValidation(false);
    }
    if (email.length < 5) setValidation(true);
  };

  return (
    <div className="content">
      <form onSubmit={onSubmit} action="" className="form">
        {status && (
          <p onClick={() => setStatus(false)} className="form__email">
            {email} <FaPencilAlt />
          </p>
        )}

        <h2 className="form__title">
          {status ? "Придумайте пароль" : "Регистрация"}
        </h2>

        {status && (
          <>
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
              Создать аккаунт
            </button>
          </>
        )}

        {!status && (
          <>
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
              <p className="form__error">
                Email должен быть не менее 5 символов
              </p>
            )}

            <button
              onClick={validationEmail}
              className="form__btn"
              type="button"
            >
              Продолжить
            </button>

            <Link to="/login" className="form__link">
              У меня есть аккаунт
            </Link>
          </>
        )}
      </form>
    </div>
  );
};
