import { useState } from "react";

import "./App.css";
import Todo from "./components/toDo";
import TodoForm from "./components/TodoForm";

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

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list" id="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo}/> // Pass the "todo" object to the toDo component
        ))}
      </div>
      <TodoForm addTodo={addTodo} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
