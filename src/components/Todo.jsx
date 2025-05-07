function Todo({ todo }) {
  return (
    <div className="todo" key={todo.id}>
      <div className="content">
        <h4>{todo.text}</h4>
        <p>{todo.category}</p>
      </div>
      <div>
        <button className="complete">Completar</button>
        <button className="remove">Excluir</button>
      </div>
    </div>
  );
}
export default Todo;
