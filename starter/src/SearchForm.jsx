import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements);
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    // console.log(searchValue);
    setSearchTerm(searchValue);
  };
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="Pets"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
// 7J-v3FjJ5PlVWeD9-z5zNQpZ4UsS4I4oEaVt96kb6Z4 api key
