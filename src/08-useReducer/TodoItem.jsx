export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span 
      className={`align-self-center ${(todo.done) ? 'text-decoration-line-through': ''}`}
      onClick={() => onToggleTodo(todo.id)}
      >
        {todo.title}

      <p className={`align-self-center ${todo.done ? 'text-decoration-line-through text-muted' : ''}`}>
        {todo.description}
      </p>
        
      </span>

      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}
      >Borrar</button>
    </li>
  );
};
