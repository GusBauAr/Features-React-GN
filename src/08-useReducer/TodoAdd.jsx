import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { title, description, onInputChange, onResetForm } = useForm({
    title: "",
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (title.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      title,
      description,
    };
    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="quue hay que hacer?"
        className="from-control"
        name="title"
        value={title}
        onChange={onInputChange}
      />
      <textarea
        placeholder="Descripción"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};
