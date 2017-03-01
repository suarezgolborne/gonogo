import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class SSGMap extends React.Component {

    render() {
    const position = [59.2873, 18.0351];
    const map = (
      <Map center={position} zoom={16} zoomControl={false} minZoom={16} maxZoom={16}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={position}>
          <Popup>
            <span>Ett härligt tips.</span>
          </Popup>
        </Marker>
      </Map>
    );

  return (
        <div className="map" id="map">
            {map}
        </div>
  );
};

};

export default SSGMap;

//
// class SSGMap extends Component {
//
//     render() {
//
//         const position = [59.2873, 18.0351];
//         const map = (
//           <Map center={position} zoom={15}>
//             <TileLayer
//               url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
//               attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
//             />
//             <Marker position={position}>
//               <Popup>
//                 <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
//               </Popup>
//             </Marker>
//           </Map>
//         );
//
//       return (
//           <div>jopjooj
//             map}
//           </div>
//       )
//   }
// }
// export default SSGMap;
