function Todo({ todo, removeTodo, completeTodo }) {
  return (
    <div
      className="todo"
      style={{
        backgroundColor: todo.isCompleted ? "#d4edda" : "",
        textDecoration: todo.isCompleted ? "line-through" : "",
      }}
    >
      <div className="content">
        <h3>{todo.text}</h3>
        <h4>{todo.category}</h4>
      </div>
      <div className="actions">
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          Completar
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          Excluir
        </button>
      </div>
    </div>
  );
}
export default Todo;
