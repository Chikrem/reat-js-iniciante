const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <h2>Pesquisar Tarefa:</h2>
      <input
        type="text"
        placeholder="Tarefa..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
