import { TodoItem } from "./TodoItem";

export const TodoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {

   const handleDelete=(id)=>{
    const comfirmDelete= window.confirm('Quieres borrar esta tarea?');
    if(comfirmDelete){
      onDeleteTodo(id);//borra la tarea 
    }
   };
  
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        
        <TodoItem 
        key={todo.id} 
        todo={todo} 
        onDeleteTodo={handleDelete} 
        onToggleTodo={onToggleTodo}/>
        
      ))}
    </ul>
  );
};
