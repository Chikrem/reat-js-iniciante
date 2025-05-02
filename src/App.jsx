import { useState } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Aprender React", category: "Trabalho", isCompleted: false },
    { id: 2, text: "Aprender JavaScript", category: "Pessoal", isCompleted: false },
    { id: 3, text: "Aprender CSS", category: "Estudos", isCompleted: false },
  ]);

  return (
    <div className="app">
      <h1>
        Lista de Tarefas
      </h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <div className="content">
              <h2>{todo.title}</h2>
              <p>{todo.category}</p>
            </div>
            <div>
              <button>Completar</button>
              <button>Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
