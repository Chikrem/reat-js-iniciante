const Filter = () => {
  return (
    <div className="filter">
      <h2>Filtrar: </h2>
      <div className="filter-options">
        <div>
            <h4>Status:</h4>
            <select>
                <option value="all">Todos</option>
                <option value="completed">Concluídos</option>
                <option value="not-completed">Não Concluídos</option>
            </select>
        </div>
        <div>
            <h4>Ordem alfabética:</h4>
            <button>Ascendente</button>
            <button>Descendente</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
