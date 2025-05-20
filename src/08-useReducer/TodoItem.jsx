export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
function getcomponentPriority(value) {
    switch (value) {
      case '1':
        return <span className="badge rounded-pill bg-success">Baja</span>;
      case '2':
        return <span className="badge rounded-pill bg-warning text-dark">Media</span>;
      case '3':
        return <span className="badge rounded-pill bg-danger">Alta</span>;
      default:
        return <span className="badge rounded-pill bg-secondary">Sin Prioridad</span>;
    }
  }
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : ''}`}
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.title}

        <p className={`align-self-center ${todo.done ? 'text-decoration-line-through text-muted' : ''}`}>
          {todo.description}
        </p>
{
  getcomponentPriority(todo.priority)
  
}
    

      </span>


      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        Borrar
      </button>


    </li>
  );
};
