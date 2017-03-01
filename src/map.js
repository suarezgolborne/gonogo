import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class SSGMap extends React.Component {

    render() {
    const position = this.props.coordinates;
    const position2 = [59.2875, 18.0332];
    const map = (
      <Map center={position} zoom={15} zoomControl={false} minZoom={15} maxZoom={15}>
        <TileLayer
        url='https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VhcmV6Z29sYm9ybmUiLCJhIjoiY2l6cXk4MXJkMDAxdzMzczdhZXNzNXN3bCJ9.nxxm26c-EUI5R_VtLHs6BQ'

        />


        <Marker position={position}>
          <Popup>
            <span>Ett härligt tips.</span>
          </Popup>
        </Marker>

        <Marker position={position2}>
          <Popup>
            <span>Ännu ett härligt tips.</span>
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
