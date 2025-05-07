function Todo({ todo, removeTodo }) {
  return (
    <div className="todo" key={todo.id}>
      <div className="content">
        <h3>{todo.text}</h3>
        <h4>{todo.category}</h4>
      </div>
      <div className="actions">
        <button className="complete">Completar</button>
        <button className="remove" >Excluir</button>
      </div>
    </div>
  );
}
export default Todo;
