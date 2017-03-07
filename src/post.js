import React, { Component } from 'react';
import { render } from 'react-dom';


var CONTENTFUL_POST_URL = 'https://api.contentful.com/spaces/2jlq09u4u7om/entries';
var CONTENTFUL_PUBLISH_URL_TEMPLATE = 'https://api.contentful.com/spaces/2jlq09u4u7om/entries/{id}/published';
var CONTENTFUL_TOKEN = '7a85b6fb0a21b9c45944ae50caccb86f69e56f006f9b1b0fd130bc45b4d4ac66';



class SSGPost extends React.Component {

    componentDidMount() {

        this.sendForm();
        // var data = new FormData();
        // data.append( "json", JSON.stringify({
        //         tipTitle: 'Testpost1',
        //         tipDescription: 'frfrg',
        //         tipAdress: 'giigo',
        //         tipZone: 'hohoho'} ));
        //
        // fetch('https://script.google.com/macros/s/AKfycbym6knzku1ba-YULwRc7ete5i0RKrkFaqBTzFJVTm7586Krimw/exec', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json',
        //   },
        //   body: {"tipZone":["ijojoijuoi"],"tipDescription":["fefe"],"tipAdress":["ergwe"],"tipTitle":["se"]}
        // })


        // const body2 = {
        //     tipTitle: 'Testpost1',
        //     tipDescription: 'frfrg',
        //     tipAdress: 'giigo',
        //     tipZone: 'hohoho'
        // };
        //
        // var data = new FormData();
        // data.append( "json", JSON.stringify( body2 ) );
        //
        // fetch('https://script.google.com/macros/s/AKfycbzdAReQnTLxcALfcOdY2dnY8qXA9ba8DOwFNJVAwCw01EvA_po/exec', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: data
        //     })
    }

    // sendForm(){
    //     fetch('https://davidwalsh.name/submit-json', {
    //     method: 'post',
    //     body: JSON.stringify({
    //     tipTitle: 'frfrf',
    //     tipDescription: 'frfrg',
    //     tipAdress: "giigo",
    //     tipZone: "hohoho"
    //     })
    //     });
    // }

    sendForm(){

            // const body = JSON.stringify({"tipZone":["ijojoijuoi"],"tipDescription":["fefe"],"tipAdress":["ergwe"],"tipTitle":["se"]}) ;

            const body = JSON.stringify(this.props.tips[0].fields) ;

            fetch(CONTENTFUL_POST_URL, {
                method: 'POST',
                headers: {
                    'X-Contentful-Content-Type': 'tips',
                    'Content-Type': 'application/vnd.contentful.management.v1+json',
                    'Authorization': 'Bearer ' + CONTENTFUL_TOKEN,
                    'Content-Length': body.length,
                },
                params: {type: 'entries', id: 'tips', space: '2jlq09u4u7om'},
                body: body
            });




        }

    render() {
        return (
            <div>



            <form method="POST" action="https://script.google.com/macros/s/AKfycbym6knzku1ba-YULwRc7ete5i0RKrkFaqBTzFJVTm7586Krimw/exec" >
                <div>
                    <label>Namn på ställe</label>
                    <input type="text" name="tipTitle" placeholder="First Name"/>
                </div>
                <div>
                    <label>Kort beskrivning, omdöme.</label>
                    <input type="text" name="tipDescription" placeholder="First Name"/>
                </div>
                <div>
                    <label>Adress</label>
                    <input type="text" name="tipAdress" placeholder="First Name"/>
                </div>
                <div>
                    <label>No go-zon</label>
                    <input type="text" name="tipZone" placeholder="First Name"/>
                </div>
                <div>
                  <button type="submit" >Submit</button>
                </div>
            </form>
            </div>
        )

    }
}

export default SSGPost;






// function publishEntry(entry, callback) {
//     var id = entry.sys.id,
//         version = entry.sys.version;
//
//     request({
//         url: CONTENTFUL_PUBLISH_URL_TEMPLATE.replace('{id}', id),
//         method: 'PUT',
//         headers: {
//             'Authorization': 'Bearer ' + CONTENTFUL_TOKEN,
//             'X-Contentful-Version': version
//         }
//     }, function(e, response, data){
//         if(e) {
//             return callback(e);
//         }
//         return callback(null, response.statusCode);
//     });
// }
//
// module.exports = {
//     post: post
// };
