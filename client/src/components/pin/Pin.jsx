import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} chambre(s)</span>
            <b>{item.price} FCFA</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
