import './Info.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Rest of your application code
// ...


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
          />
          <Marker position={[42.35647, 13.40216]}
           icon={L.divIcon({
            iconSize: [30,30],

          })}>
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
