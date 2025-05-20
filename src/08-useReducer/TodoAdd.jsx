import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { title, description, onInputChange, onResetForm, priority } = useForm({
    title: "",
    description: "",
    priority: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (title.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      title,
      description,
      priority,
    };
    onNewTodo(newTodo);
    onResetForm();
  };

  const getPriorityColor = (value) => {
    switch (value) {
      case '1':
        return 'green';
      case '2':
        return 'orange';
      case '3':
        return 'red';
      default:
        return 'black';
    }
  };


  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="que hay que hacer?"
        className="from-control"
        name="title"
        value={title}
        onChange={onInputChange}

      />

      <select name="priority"
        className="form-select"
        aria-label="Default select example"
        value={priority}
        onChange={onInputChange}
        style={{ color: getPriorityColor(priority) }}
      >
        <option selected>PRIORIDAD</option>
        <option value="1">Baja</option>
        <option value="2">Media </option>
        <option value="3">Alta</option>
      </select>






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
