import "../styles/todoform.scss";

export const TodoForm = () => {
  return (
    <div className="form-todo">
      <input
        placeholder="+ add new task"
        type="text"
        className="form-todo__input"
      />
      <button className="form-todo__btn">Add</button>
    </div>
  );
};
