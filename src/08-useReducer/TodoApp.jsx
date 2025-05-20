import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks";

export const TodoApp = () => {
  const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } =
    useTodos();

  return (
    <>
      <h1>
        TodoApp: {todos.length},{" "}
        <small>pendientes:{todos.filter((todo) => !todo.done).length}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* todoList */}
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />

          {/* fin todoliST */}
        </div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />

          {/* todo add -> onNewTodo*/}
          <TodoAdd onNewTodo={handleNewTodo} />
          {/* fin de todoadd */}
        </div>
      </div>
    </>
  );
};
