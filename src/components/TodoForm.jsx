import { useState } from "react";

function TodoForm() {
  const [text, setText] = useState(""); // State to hold the text input value
  const [category, setCategory] = useState(""); // State to hold the selected category

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (!text || !category) {
      alert("Preencha todos os campos!"); // Alert if any field is empty
      return false; 
    }
    console.log("Form submitted!");
    console.log("Text:", text);
    console.log("Category:", category);
    setText("");
    setCategory("");
    return true; 
  };

  return (
    <div className="todo-form">
      <h2>Adicionar Tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tarefa"
          onChange={(e) => setText(e.target.value)}
        />
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma Categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
}

export default TodoForm;
