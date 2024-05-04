import "./filter.scss";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || 0,
    maxPrice: searchParams.get("maxPrice") || 100000000,
    bedroom: searchParams.get("bedroom") || "",
  });

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {
    setSearchParams(query);
  };

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="filter">
      <h1>
        Résultats pour <b>{capitalizeFirstLetter(searchParams.get("city"))}</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Ville</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Ville"
            onChange={handleChange}
            defaultValue={query.city}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Action</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            defaultValue={query.type}
          >
            <option value="">Vide</option>
            <option value="buy">Acheter</option>
            <option value="rent">Louer</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Bien Immobilier</label>
          <select
            name="property"
            id="property"
            onChange={handleChange}
            defaultValue={query.property}
          >
            <option value="">Vide</option>
            <option value="apartment">Appartement</option>
            <option value="house">Maison</option>
            <option value="land">Terrain</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Budget min</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="Vide"
            onChange={handleChange}
            defaultValue={query.minPrice}
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Budget max</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="Vide"
            onChange={handleChange}
            defaultValue={query.maxPrice}
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Chambres</label>
          <input
            type="number"
            id="bedroom"
            name="bedroom"
            placeholder="Vide"
            onChange={handleChange}
            defaultValue={query.bedroom}
          />
        </div>
        <button onClick={handleFilter}>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
