import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Trouvez le bien de vos rêves.</h1>
          <p>
            Découvrez votre futur chez-vous : une oasis de tranquillité au cœur
            de la ville, avec des espaces lumineux et une vue imprenable.
            Bienvenue dans votre prochaine aventure immobilière.
          </p>
          <SearchBar />

          <div className="boxes">
            <div className="box">
              <h1>10+</h1>
              <h2>Années d&apos;expériences</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Récompenses obtenues</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Propriétés prêtes</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
