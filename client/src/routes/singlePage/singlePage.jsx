import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
//import { singlePostData, userData } from "../../lib/dummydata";
import { useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";

function SinglePage() {
  const post = useLoaderData();

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{post.address}</span>
                  <span>, {post.city}</span>
                </div>
                <div className="price">{post.price} FCFA</div>
              </div>
              <div className="user">
                <img src={post.user.img} alt="" />
                <span>{post.user.name}</span>
              </div>
            </div>
            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail.desc),
              }}
            ></div>
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
                {post.postDetail.utilities === "owner" ? (
                  <p>Le propriétaire est responsable</p>
                ) : (
                  <p>Le locataire est responsable</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Politique animaux</span>
                {post.postDetail.pet === "allowed" ? (
                  <p>Pets Allowed</p>
                ) : (
                  <p>Pets not Allowed</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Politique des loyers</span>
                <p>{post.postDetail.income}</p>
              </div>
            </div>
          </div>
          <p className="title">Dimensions</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>{post.postDetail.size} m²</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>{post.bedroom} chambre(s)</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>{post.bathroom} salle(s) de bain</span>
            </div>
          </div>
          <p className="title">Lieux à proximité</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>Ecoles</span>
                <p>
                  à{" "}
                  {post.postDetail.school > 999
                    ? post.postDetail.school / 1000 + "km"
                    : post.postDetail.school + "m"}{" "}
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Arrêt de bus</span>
                <p>à {post.postDetail.bus} m</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>à {post.postDetail.restaurant} m</p>
              </div>
            </div>
          </div>
          <p className="title">Emplacement</p>
          <div className="mapContainer">
            <Map items={[post]} />
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
