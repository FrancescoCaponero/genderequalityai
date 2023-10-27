import './Info.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Info = () => {
  return (
    <section id="info" className="info-section">
      <div className="title-wrapper">
        <h2>
          05
          <br />
          Info
        </h2>
      </div>
      <div className="map-wrap">
        <MapContainer center={[42.35647, 13.40216]} zoom={18} style={{ width: '100%', height: '100%' }}>
          {/* Use the custom Stadia.AlidadeSmoothDark TileLayer */}
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png" // Remove the `{ext}`
            minZoom={0}
            maxZoom={20}
            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[42.35647, 13.40216]}>
            <Popup>
              <h2>Viale Nizza, 14, 67100 L'Aquila AQ, Italy</h2>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <h2>Viale Nizza, 14, 67100 L'Aquila AQ, Italy</h2>
    </section>
  );
}

export default Info;
