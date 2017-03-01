import React, { Component } from 'react';
import logo from './heyho.jpg';
import './App.css';
import SSGMap from './map.js';
import { Accordion, AccordionItem } from 'react-sanfona';

class App extends Component {
    componentDidUpdate() {
        console.log(this.state, "uppdate");
    }
    componentDidMount () {
        console.log("cdm", this.state);
    }


  render() {

    let zones = ["Vivalla, Örebro",
"Hallunda/Norsborg, Botkyrka",
"Husby, Stockholm",
"Ronna/Geneta/Lina, Södertälje",
"Rinkeby/Tensta, Stockholm",
"Araby, Växjö",
"Rosengård söder om Amiralsgatan, Malmö",
"Södra Sofielund (Seved), Malmö",
"Bergsjön, Göteborg",
"Biskopsgården, Göteborg",
"Gårdsten, Göteborg",
"Hammarkullen",
"Hjällbo",
"Lövgärdet, Göteborg",
"Skäggetorp, Linköping",
"Oxhagen/Varberga, Örebro",
"Tjärna Ängar, Borlänge",
"Alby/Fittja, Botkyrka",
"Tureberg, Sollentuna",
"Adolfsberg/Dalhem/Drottninghög, Helsingborg",
"Hässleholmen/Hulta, Borås",
"Bäckby, Västerås",
"Gottsunda/Valsätra, Uppsala",
"Brandbergen, Haninge",
"Bredäng, Stockholm",
"Edsberg, Sollentuna",
"Finnsta, Upplands Väsby",
"Fornhöjden, Södertälje",
"Hagsätra/Rågsved, Stockholm",
"Hovsjö, Södertälje",
"Hässelby/Vällingby, Stockholm",
"Rissne/Hallonbergen, Sundbyberg",
"Skogås, Huddinge",
"Smedby, Upplands Väsby",
"Sångvägen, Järfälla",
"Smedby, Upplands Väsby",
"Sångvägen, Järfälla",
"Termovägen, Järfälla",
"Älvsjö/Solberga, Stockholm",
"Östberga, Stockholm",
"Charlottesborg, Kristianstad",
"Gamlegården, Kristianstad",
"Holma/Kroksbäck/Bellevue, Malmö",
"Koppargården, Landskrona",
"Andersberg, Halmstad",
"Falkagård, Falkenberg",
"Hisings Backa, Göteborg",
"Kronogården, Trollhättan",
"Rannebergen, Göteborg",
"Tynnered/Grevgården/Opaltorget, Västra Frölunda",
"Fröslunda, Eskilstuna",
"Hageby, Norrköping",
"Lagersberg, Eskilstuna",
"Råslätt, Jönköping",
"Skiftinge, Eskilstuna"];

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Let's Go No-Go</h2>
        </div>
        <p className="App-intro">
            Fancy copy.
        </p>

            <Accordion>
                {zones.map((item) => {
                    return (
                        <AccordionItem title={`${ item }`} slug={item} key={item}>
                            <div>
                                {`Item ${ item } content`}
                                {item === 3 ? <p><img src="https://cloud.githubusercontent.com/assets/38787/8015584/2883817e-0bda-11e5-9662-b7daf40e8c27.gif" /></p> : null}
                            </div>
                        </AccordionItem>
                    );
                })}
            </Accordion>
            <div><SSGMap />
                </div>

      </div>
    );
  }
}

export default App;
