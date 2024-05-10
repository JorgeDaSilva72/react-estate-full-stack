import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";
import apiRequest from "../../lib/apiRequest";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

function ProfilePage() {
  const data = useLoaderData();

  const { updateUser, currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>Informations Utilisateur</h1>
            <Link to="/profile/update">
              <button>Mettre à jour son profil</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Votre Avatar:
              <img src={currentUser.avatar || "noavatar.jpg"} alt="" />
            </span>
            <span>
              Votre nom d'utilisateur: <b>{currentUser.username}</b>
            </span>
            <span>
              Votre e-mail: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>Mes annonces</h1>
            <Link to="/add">
              <button>Créer une annonce</button>
            </Link>
          </div>
          <Suspense fallback={<p>En chargement...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Erreur lors du chargement des annonces!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.userPosts} />}
            </Await>
          </Suspense>
          <div className="title">
            <h1>Annonces sauvegardées</h1>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.savedPosts} />}
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
