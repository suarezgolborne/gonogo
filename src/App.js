import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import SSGMap from './map.js';
import zones from './zones.json';
import contentful from 'contentful';

var SPACE_ID = '2jlq09u4u7om'
var ACCESS_TOKEN = '3981a9e25d1b70b9d7f306b9837903cc4c5e14e2671c66d33f552e9319b7e661'


var client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
})

class App extends Component {

    constructor(props, context) {
      super(props, context)

      let randomStart = Math.floor(Math.random()*2);

      this.state = {
          zone: zones[randomStart].zone,
          coordinates: zones[randomStart].coordinates,
          description: zones[randomStart].description,
          slug: randomStart + 1,
          tips: [],
          zones: []
      };
    }

    componentDidMount() {

        client.getEntries({
            'content_type': '6XwpTaSiiI2Ak2Ww0oi6qa'
            }
        )
                  .then((response) => {
                      this.setState({zones: response.items});
                  })
                  .catch((error) => {
                    console.log('Error occured')
                    console.log(error)
                  })
    }

    handleClick(zone) {
        this.setState({
            coordinates: [zone.fields.zoneCoordinates.lat, zone.fields.zoneCoordinates.lon],
            zone: zone.fields.title,
            description: zone.fields.categoryDescription
        })

        client.getEntries({
            'content_type': 'tips',
            'fields.tipZone.sys.id': zone.sys.id
        }
        )

                  .then((response) => {
                      this.setState({tips: response.items});
                  })
                  .catch((error) => {
                    console.log('Error occured')
                    console.log(error)
                  })
    }






  render() {
    const dontMiss = this.state.tips.length > 0;

    return (
    <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="location">
            <div className="location-title">
                {this.state.zone}, {this.state.description}
            </div>

            {dontMiss ?
                <div >
                    <span className="mediumText">Missa inte detta:</span>
                </div> : false
            }

            <div >
                <ul className="teaser-container">
                    {this.state.tips.map((tip, i) =>
                        <li className="teaser" key={i}>{i+1}. {tip.fields.tipTitle}
                        </li>
                    )}
                </ul>
            </div>
        </div>



        <div className="list">
            <div className="chooseLocation mediumText   ">
                <span>Välj plats!
                    <span className="thefinger">☟</span>
                </span>
            </div>

        <div className="react-sanfona">
            <ul className="zonelist">
            {this.state.zones.map((zone, i) =>
               <li className="react-sanfona-item" key={i} onClick={() => this.handleClick(zone)}>
                   <div className="zonetitle regularText">
                       <span>{zone.fields.title}</span>
                   </div>
                   <div className="zonedescription regularText">
                       <span>{zone.fields.categoryDescription}</span>
                   </div>
                </li>

             )}
             </ul>
         </div>

            </div>
            <SSGMap coordinates={this.state.coordinates} tips={this.state.tips}/>


      </div>
    );
  }
}

export default App;
