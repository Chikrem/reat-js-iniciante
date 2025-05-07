function Todo({todo}){
    return(
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
    )
}
export default Todo;