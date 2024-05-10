import { useState } from "react";
import "./newPostPage.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import { useNavigate } from "react-router-dom";

function NewPostPage() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await apiRequest.post("/posts", {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          address: inputs.address,
          city: inputs.city,
          bedroom: parseInt(inputs.bedroom),
          bathroom: parseInt(inputs.bathroom),
          type: inputs.type,
          property: inputs.property,
          latitude: inputs.latitude,
          longitude: inputs.longitude,
          images: images,
        },
        postDetail: {
          desc: value,
          utilities: inputs.utilities,
          pet: inputs.pet,
          income: inputs.income,
          size: parseInt(inputs.size),
          school: parseInt(inputs.school),
          bus: parseInt(inputs.bus),
          restaurant: parseInt(inputs.restaurant),
        },
      });
      navigate("/" + res.data.id);
    } catch (err) {
      console.log(err);
      setError(error);
    }
  };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Ajouter une annonce</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Titre</label>
              <input id="title" name="title" type="text" required />
            </div>
            <div className="item">
              <label htmlFor="price">Prix</label>
              <input id="price" name="price" type="number" required />
            </div>
            <div className="item">
              <label htmlFor="address">Adresse</label>
              <input id="address" name="address" type="text" required />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <ReactQuill
                theme="snow"
                onChange={setValue}
                value={value}
                required
              />
            </div>
            <div className="item">
              <label htmlFor="city">Ville</label>
              <input id="city" name="city" type="text" />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Nombre de chambre</label>
              <input min={1} id="bedroom" name="bedroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Nombre de salle de bain</label>
              <input min={1} id="bathroom" name="bathroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="type">Action</label>
              <select name="type">
                <option value="rent" defaultChecked>
                  Louer
                </option>
                <option value="buy">Acheter</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="type">Bien Immobilier</label>
              <select name="property">
                <option value="apartment">Appartement</option>
                <option value="house">Maison</option>
                <option value="land">Terrain</option>
              </select>
            </div>

            <div className="item">
              <label htmlFor="utilities">Politique</label>
              <select name="utilities">
                <option value="owner">Le propriétaire est responsable</option>
                <option value="tenant">Le locataire est responsable</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Politique animaux</label>
              <select name="pet">
                <option value="allowed">Autorisé</option>
                <option value="not-allowed">Interdit</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="income">Politique loyers</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Politique loyers"
              />
            </div>
            <div className="item">
              <label htmlFor="size">Surface totale en m2</label>
              <input min={0} id="size" name="size" type="number" />
            </div>
            <div className="item">
              <label htmlFor="school">Distance d'une école</label>
              <input min={0} id="school" name="school" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bus">Distance d'un arrêt de bus</label>
              <input min={0} id="bus" name="bus" type="number" />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Distance d'un restaurant</label>
              <input min={0} id="restaurant" name="restaurant" type="number" />
            </div>
            <button className="sendButton">Ajouter</button>
            {error && <span>error</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer">
        {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "dytskq6o3",
            uploadPreset: "react-estate-full-stack",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default NewPostPage;
