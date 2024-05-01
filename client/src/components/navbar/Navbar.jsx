import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const user = true; //dummy data

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>Krist Immo</span>
          <img src="/cameroon flag.png" alt="cameroon flag" />
        </a>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/agents">Agents</Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <Link to="/profile">
              <img src="/herveKrist.jpg" alt="" />
            </Link>
            <span className="name">Herve Krist</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profil</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">Se connecter</Link>
            <Link to="/register" className="register">
              S'inscrire
            </Link>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/agents">Agents</Link>
          <Link to="/login">Se connecter</Link>
          <Link to="/register">S'inscrire</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
