import { useState } from "react";
import "./searchBar.scss";
import { Link } from "react-router-dom";

const types = ["Acheter", "Louer"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "Acheter",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="Dans quelle ville ?" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Votre budget min ?"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={100000000}
          placeholder="Votre budget max ?"
        />

        <button>
          <Link to="/list">
            <img src="/search.png" alt="" />
          </Link>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
