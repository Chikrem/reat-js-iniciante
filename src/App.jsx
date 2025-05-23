import { useState } from "react";

import "./App.css";
import Todo from "./components/toDo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Aprender React", category: "Trabalho", isCompleted: false },
    {
      id: 2,
      text: "Aprender JavaScript",
      category: "Pessoal",
      isCompleted: false,
    },
    { id: 3, text: "Aprender CSS", category: "Estudos", isCompleted: false },
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("all");

  const [sort, setSort] = useState("asc");

  const addTodo = (text, category) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ]);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos[todoIndex].isCompleted = !newTodos[todoIndex].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list" id="todo-list">
        {todos
          .filter((todo) =>
            filter === "all"
              ? true
              : filter === "completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            /> // Pass the "todo" object to the toDo component
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
