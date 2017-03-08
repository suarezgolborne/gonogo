import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import SSGMap from './map.js';
// import SSGPost from './post.js';
import jsonloader from 'json-loader'
import zones from '../public/zones.json';
import contentful from 'contentful';
import { Link } from 'react-router'

var SPACE_ID = '2jlq09u4u7om'
var ACCESS_TOKEN = '3981a9e25d1b70b9d7f306b9837903cc4c5e14e2671c66d33f552e9319b7e661'


var client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
})

const enterUrl = window.location.pathname !== "/" ? decodeURIComponent(window.location.pathname.substr(1)) : "Araby";

class App extends Component {

    constructor(props, context) {
      super(props, context)

      const result = zones.items.find(function( obj ) {
          return obj.fields.title === enterUrl;
      });

    this.state = {
        coordinates: [result.fields.zoneCoordinates.lat, result.fields.zoneCoordinates.lon],
        zone: result.fields.title,
        description: result.fields.categoryDescription,
        zoneId: result.sys.id,
        tips: [],
        zones: zones.items
    };

    }

    getObject(slug) {
        zones.items.find(function( obj ) {
            return obj.fields.title === slug
        });
    }

    componentDidMount() {

        const result = zones.items.find(function( obj ) {
            return obj.fields.title === enterUrl
        });

        this.getTipsinZone(result.sys.id)

    //     client.getEntries({
    //         'content_type': '6XwpTaSiiI2Ak2Ww0oi6qa',
    //          'order': 'fields.title',
    //          'select': 'fields.title,fields.categoryDescription,fields.zoneCoordinates,sys.id'
    //         }
    //     )
    //  .then((response) => {
    //      console.log(response);
    //       this.setState(
    //           {zones: response.items}
    //       );
    //    this.getTipsinZone(this.props.app.location.query.id)
    //   })
    //   .catch((error) => {
    //     console.log('Error occured')
    //     console.log(error)
    //   })
    }

    updateZone(i, zone) {
        if (i !== undefined) {
        this.setState({
                coordinates: [zones.items[i].fields.zoneCoordinates.lat, zones.items[i].fields.zoneCoordinates.lon],
                zone: zones.items[i].fields.title,
                description: zones.items[i].fields.categoryDescription,
                zoneId: zones.items[i].sys.id
            })

        }
        this.getTipsinZone(zone)
    }

    getTipsinZone(zone) {


 //
 // console.log(decodeURIComponent(zone.pathname.substr(zone.pathname.lastIndexOf('/') + 1)));


        client.getEntries({
            'content_type': 'tips',
            'fields.tipZone.sys.id': zone
        })
        .then((response) => {
            this.setState({
                tips: response.items
            });
        })
        .catch((error) => {
            console.log('Error occured')
            console.log(error)
        })
    }

    handleTipClick(tip) {
        this.setState({
            coordinates: [tip.fields.tipCoordinates.lat, tip.fields.tipCoordinates.lon]
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
            <div className="location-title-container">
                <span>Sverige sägs ha 53 <span className="location-nogo">"no-go"</span>-zoner. </span>
                <span  className="location-title">{this.state.zone}</span>
                <span> i </span>
                <span className="location-title">{this.state.description}</span>
                <span> är en av dem!</span>
            </div>

            {dontMiss ?
                <div >
                    <span className="mediumText">Missa inte detta:</span>
                </div> : false
            }

            <div >
                <ul className="tipContainer">
                    {this.state.tips.map((tip, i) =>
                        <li key={i}  onClick={() => this.handleTipClick(tip)}>
                            <div className="tipTitle">{i+1}. {tip.fields.tipTitle}</div>
                            <div className="tipDescription">
                                <div className="tipDescription-text">{tip.fields.tipDescription}
                                </div>
                                    {tip.fields.tipPic !== undefined ?
                                    <div className="tipImage-container">
                                        <img className="tipImage" src={`${tip.fields.tipPic.fields.file.url}?fit=crop&w=425&h=178` } alt={tip.fields.tipPic.fields.title}></img>
                                    </div>
                                     : false}
                                <div className="tipAddress">{tip.fields.tipAdress}
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>

        <div className="list">
            <div className="chooseLocation mediumText">
                <span>Välj plats!
                    <span className="thefinger">☟</span>
                </span>
        </div>

        <div className="zonelist-container">
            <ul className="zonelist">
            {this.state.zones.map((zone, i) =>
               <Link key={i} to={{
                        pathname: `/${encodeURIComponent(zone.fields.title)}`}}
                         onClick={() => this.updateZone(i, zone.sys.id) }

                   ><li className="zonelist-item" key={i} >
                   <div className="zonetitle regularText">
                       <span>{zone.fields.title}</span>
                   </div>
                   <div className="zonedescription regularText">
                       <span>
                           {zone.fields.categoryDescription}
                       </span>
                   </div>
                </li>
            </Link>

             )}
             </ul>
         </div>

            </div>
            <SSGMap coordinates={this.state.coordinates} tips={this.state.tips}/>

{/*
                {dontMiss ?
                    <SSGPost tips={this.state.tips} />
 : false
                }

                */}

      </div>

    );
  }
}

export default App;
