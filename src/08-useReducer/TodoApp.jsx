import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks";
import { useState } from "react";

export const TodoApp = () => {
  const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } =
    useTodos();

  const [filter, setFilter] = useState("all");

  const getFilteredTodos = () => {
    switch (filter) {
      case "pending":
        return todos.filter((todo) => !todo.done);
      case "completed":
        return todos.filter((todo) => todo.done);
      default:
        return todos;
    }
  };

  return (
    <>
      <h1>
        TodoApp: {todos.length},{" "}
        <small>pendientes:{todos.filter((todo) => !todo.done).length}</small>
      </h1>
      <hr />

      {/* Tabs de filtro de bootstrap */}
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <button
            className={`nav-link ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            Todas
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${filter === "pending" ? "active" : ""}`}
            onClick={() => setFilter("pending")}
          >
            Pendientes
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${filter === "completed" ? "active" : ""}`}
            onClick={() => setFilter("completed")}
          >
            Completadas
          </button>
        </li>
      </ul>

      <div className="row">
        <div className="col-7">
          {/* todoList */}
          <TodoList
            todos={getFilteredTodos()}
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
