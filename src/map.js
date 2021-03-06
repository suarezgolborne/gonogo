import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class SSGMap extends React.Component {


    render() {
    // const hasTips = this.props.tips.length > 0;

    const mapPosition = this.props.coordinates;
    // const markerPosition = hasTips ? [this.props.tips["0"].fields.tipCoordinates.lat, this.props.tips["0"].fields.tipCoordinates.lon] : false;


    const map = (
      <Map center={mapPosition} zoom={14} zoomControl={false} minZoom={14} maxZoom={14}>
        <TileLayer
        url='https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VhcmV6Z29sYm9ybmUiLCJhIjoiY2l6cXk4MXJkMDAxdzMzczdhZXNzNXN3bCJ9.nxxm26c-EUI5R_VtLHs6BQ'

        />


        {this.props.tips.map((tips, i) =>
        <Marker key={i} closeButton={false} position={[tips.fields.tipCoordinates.lat, tips.fields.tipCoordinates.lon]}  title={this.props.tips["0"].fields.tipTitle} >
              <Popup>
                  <span>{tips.fields.tipTitle}</span>
              </Popup>
        </Marker>
        )}


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
