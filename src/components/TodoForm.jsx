function TodoForm (){

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log("Form submitted!"); // Log a message to the console
        return true; // Return true to indicate that the form submission was successful
        // Handle form submission logic here
    };

    return (
        <div className="todo-form">
            <h2>Adicionar Tarefa:</h2>
            <form>
                <input type="text" placeholder="Tarefa"/>
                <select>
                    <option value="">Selecione uma Categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit" onClick={handleSubmit}>Criar Tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm;