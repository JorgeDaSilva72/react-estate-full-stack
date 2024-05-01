import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummydata";

function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                  <span>, {singlePostData.city}</span>
                </div>
                <div className="price">{singlePostData.price} FCFA</div>
              </div>
              <div className="user">
                <img src="/herveKrist.jpg" alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">Général</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utiles</span>
                <p>Le locataire est responsable</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Politique relative aux animaux de compagnie</span>
                <p>Animaux acceptés</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Frais de propriété</span>
                <p>Doit avoir 3 fois le loyer dans le revenu total du ménage</p>
              </div>
            </div>
          </div>
          <p className="title">Dimensions</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>{singlePostData.size} m²</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>{singlePostData.bedroom} chambre(s)</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>{singlePostData.bathroom} salle(s) de bain</span>
            </div>
          </div>
          <p className="title">Lieux à proximité</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>Ecoles</span>
                <p>à {singlePostData.school} </p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Arrêt de bus</span>
                <p>à {singlePostData.bus}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>à {singlePostData.restaurant}</p>
              </div>
            </div>
          </div>
          <p className="title">Emplacement</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Envoyer un message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Sauvegarder l'endroit.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
