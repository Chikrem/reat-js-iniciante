const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className="filter">
      <h2>Filtrar: </h2>
      <div className="filter-options">
        <div>
            <h4>Status:</h4>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all">Todos</option>
                <option value="completed">Concluídos</option>
                <option value="not-completed">Não Concluídos</option>
            </select>
        </div>
        <div>
            <h4>Ordem alfabética:</h4>
            <button onClick={() => setSort("asc")}>Ascendente</button>
            <button onClick={() => setSort("des")}>Descendente</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
