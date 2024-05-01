import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profilePage.scss";

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>Informations Utilisateur</h1>
            <button>Mettre à jour son profil</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src="/herveKrist.jpg" alt="" />
            </span>
            <span>
              Username: <b>Herve Krist</b>
            </span>
            <span>
              E-mail: <b>herve.krist@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>Mes annonces</h1>
            <button>Créer une nouvelle annonce</button>
          </div>
          <List />
          <div className="title">
            <h1>Annonces sauvegardées</h1>
          </div>
          <List />
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
