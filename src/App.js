import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import SSGMap from './map.js';
import { Accordion, AccordionItem } from 'react-sanfona';



// "Hallunda/Norsborg, Botkyrka",
// "Husby, Stockholm",
// "Ronna/Geneta/Lina, Södertälje",
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
      this.state = {
          zone: "Vivalla, Örebro",
          coordinates: [59.2998949, 15.1869884],
          description: "En beskrivning",
          slug: 1
      };
    }

    componentDidUpdate() {
        console.log(this.state, "uppdate");

    }
    componentDidMount () {
        console.log("cdm", this.state);
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

    let zones = [
        {zone: "Vivalla, Örebro",
         coordinates: [59.2998949, 15.1869884],
         description: "En beskrivning",
         slug: 1},
         {zone: "Hallunda/Norsborg, Botkyrka",
          coordinates: [59.2462, 17.8215],
          description: "En beskrivning",
          slug: 2},
         {zone: "Husby, Stockholm",
          coordinates: [59.41, 17.9263],
          description: "En beskrivning",
          slug: 3}
       ];


    return (
      <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>


<div className="list">

         <h2>Välj din ort!</h2>
            <Accordion activeItems={this.state.slug} >
                {zones.map((item, i) => {
                    const shoulditbeactive = (item.slug === this.state.slug ? "h2" : "h3");

                    console.log(shoulditbeactive);

                    return (
                        <AccordionItem
                            title={`${ item.zone }`}
                            slug={item.slug}
                            key={item.slug}
                            onExpand={() => this.handleClick(item)}
                            titleClassName={shoulditbeactive}
                        >
                            <div>
                                {`Item ${ item.description } content`}
                            </div>
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
