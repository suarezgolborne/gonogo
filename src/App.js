import React, { Component } from 'react';
import logo from './logo.png';
import arrow from './arrow.svg';
import './App.css';
import SSGMap from './map.js';
import { Accordion, AccordionItem } from 'react-sanfona';
import zones from './zones.json';
// import { Accordion, AccordionItem } from './accordion';




// "Rinkeby/Tensta, Stockholm",
// "Araby, Växjö",
// "Rosengård söder om Amiralsgatan, Malmö",
// "Södra Sofielund (Seved), Malmö",
// "Bergsjön, Göteborg",
// "Biskopsgården, Göteborg",
// "Gårdsten, Göteborg",
// "Hammarkullen",
// "Hjällbo",
// "Lövgärdet, Göteborg",
// "Skäggetorp, Linköping",
// "Oxhagen/Varberga, Örebro",
// "Tjärna Ängar, Borlänge",
// "Alby/Fittja, Botkyrka",
// "Tureberg, Sollentuna",
// "Adolfsberg/Dalhem/Drottninghög, Helsingborg",
// "Hässleholmen/Hulta, Borås",
// "Bäckby, Västerås",
// "Gottsunda/Valsätra, Uppsala",
// "Brandbergen, Haninge",
// "Bredäng, Stockholm",
// "Edsberg, Sollentuna",
// "Finnsta, Upplands Väsby",
// "Fornhöjden, Södertälje",
// "Hagsätra/Rågsved, Stockholm",
// "Hovsjö, Södertälje",
// "Hässelby/Vällingby, Stockholm",
// "Rissne/Hallonbergen, Sundbyberg",
// "Skogås, Huddinge",
// "Smedby, Upplands Väsby",
// "Sångvägen, Järfälla",
// "Smedby, Upplands Väsby",
// "Sångvägen, Järfälla",
// "Termovägen, Järfälla",
// "Älvsjö/Solberga, Stockholm",
// "Östberga, Stockholm",
// "Charlottesborg, Kristianstad",
// "Gamlegården, Kristianstad",
// "Holma/Kroksbäck/Bellevue, Malmö",
// "Koppargården, Landskrona",
// "Andersberg, Halmstad",
// "Falkagård, Falkenberg",
// "Hisings Backa, Göteborg",
// "Kronogården, Trollhättan",
// "Rannebergen, Göteborg",
// "Tynnered/Grevgården/Opaltorget, Västra Frölunda",
// "Fröslunda, Eskilstuna",
// "Hageby, Norrköping",
// "Lagersberg, Eskilstuna",
// "Råslätt, Jönköping",
// "Skiftinge, Eskilstuna"];

class App extends Component {

    constructor(props, context) {
      super(props, context)

      let randomStart = Math.floor(Math.random()*5);

      this.state = {
          zone: zones[randomStart].zone,
          coordinates: zones[randomStart].coordinates,
          description: zones[randomStart].description,
          slug: randomStart + 1
      };
    }


    handleClick(item) {
        this.setState({
            coordinates: item.coordinates,
            zone: item.zone,
            description: item.description,
            slug: item.slug
        })
    }

  render() {



    return (
      <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>


<div className="list">

         <h2>Välj din ort!</h2>
             <div>
                 <img src={arrow} className="arrow"/>
             </div>
             <Accordion activeItems={this.state.slug} >
                {zones.map((item, i) => {

                    return (
                        <AccordionItem
                            title={`${ item.zone }`}
                            slug={item.slug}
                            key={item.slug}
                            onExpand={() => this.handleClick(item)}
                        >
                        </AccordionItem>

                    );
                })}
            </Accordion>
            </div>
            <SSGMap coordinates={this.state.coordinates}/>


      </div>
    );
  }
}

export default App;
