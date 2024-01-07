import { FiSearch } from "react-icons/fi";
import "../../Clients/styles/Components/NavBar/ProductsWelcome/style.css";

type SearchData = {
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
};

interface Style {
    searchContainer:React.CSSProperties
}

const Search: React.FC<SearchData> = ({ handleSearchChange, searchValue}) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  }

  const style:Style = {
    searchContainer: {
        position: 'absolute',
        top: '70%',
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
    }
  };
  
  return (
    <form onSubmit={ handleSubmit} style={style.searchContainer}>
      <input
        type="text"
        name="search"
        id="search"
        value={searchValue}
        onChange={handleSearchChange}
        placeholder="Recherchez un produit ici..."
      />
      <button title="button de recherche" type="submit">
        <FiSearch />
      </button>
    </form>
  );
};

export default Search;
