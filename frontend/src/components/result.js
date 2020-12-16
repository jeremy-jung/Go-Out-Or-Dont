/*  Locations list
    Created on 12/12/2020 by Carys Kong
    Edited on 15/12/2020 by Jeremy Jung
*/

import React from 'react';
import { render } from 'react-dom';
import ProgressBar from "./progressBar.js";
import FrownyFace from "./frownyFace.png";
import SignOut from './SignOut.js';


export class Result extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error: null,
            learningMore: false,
            isLoaded: true,
            items: [],
            apiResponse: false
        };

        this.handleLearnMore = this.handleLearnMore.bind(this);
        this.getAPIRating = this.getAPIRating.bind(this);
        this.getRatings = this.getRatings.bind(this);
        this.getRatings();
    }

    handleLearnMore() {
        this.setState({
            learningMore: true,
            items: this.state.items
        });
    }

    // Get the results from final api endpoint
    getAPIRating = (place, worldOption) => {
        let url = "";
        if (worldOption == "country") {
            url = "https://shouldigoout.herokuapp.com/api/rate/country/?location=" + place;
        }
        else if (worldOption == "state") {
            url = "https://shouldigoout.herokuapp.com/api/rate/state/?location=" + place;
        }

        fetch(url)
        .then(res => res.json())
        .then(data => {
            let array = [];
            for (let key in data) {
                let newObj = {};
                newObj[key] = data[key];
                array.push(newObj);
            }
            this.setState((prev) =>({
                items: array,
                apiResponse: true
            }))
            console.log(this.state.items);
        })
    }

    getLocation = (callback) => {
        let querystring = this.props.match.params.id.substring(0);
        let placindexComma = querystring.indexOf(",");
        let place = querystring.substring(0, placindexComma);
        let worldOption = querystring.substring(placindexComma + 1);

        let returnObj = {};
        returnObj["place"] = place;
        returnObj["worldOption"] = worldOption;
        callback(returnObj);
    }

    getRatings = () => {
        this.getLocation( (location) => {
            let worldOption = location.worldOption;
            let place = location.place;
            this.getAPIRating(place, worldOption);
        })
    }

    render(){
        if (this.state.apiResponse == true) {
            const learningMore = this.state.learningMore;
            let score;
            let message = 'You should go out today!';
            let details;
            let querystring = this.props.match.params.id.substring(1);
            let placindexComma = querystring.indexOf(",");
            let place = querystring.substring(0, placindexComma);
            let worldOption = querystring.substring(placindexComma + 1);
            // console.log(this.props.match.params.id.substring(1));
            console.log("place: ", place)
            console.log("worldoption: ", worldOption)

            if (learningMore) {
                details =
                    <div class="detailedResult">
                        <div class="individualResult">
                            <p style={{ marginRight: '20px' }}>UV INDEX</p>
                            <ProgressBar completed={this.state.items[0]['uv'] * 20} />
                            <p style={{ marginLeft: '20px', width: '30px' }}>{this.state.items[0]['uv']}</p>
                        </div>
                        <div class="individualResult">
                            <p style={{ marginRight: '20px' }}>TEMP</p>
                            <ProgressBar completed={this.state.items[1]['temp'] * 20} />
                            <p style={{ marginLeft: '20px', width: '30px' }}>{this.state.items[1]['temp']}</p>
                        </div>
                        <div class="individualResult">
                            <p style={{ marginRight: '20px' }}>COVID-19</p>
                            <ProgressBar completed={this.state.items[2]['covid'] * 20} />
                            <p style={{ marginLeft: '20px', width: '30px' }}>{this.state.items[2]['covid']}</p>
                        </div>
                    </div>;
            } else {
                details = <p></p>;
            }

            return (
                <div>
                    <div class="simpleResult">
                        {score}
                        <div>
                            <p style={{ marginTop: '35px' }}>{message}</p>
                            {/* the score out of ten */}
                            {/* statement that says whether user should leave the house */}
                            <button onClick={this.handleLearnMore}>see why</button>
                            <p></p>
                        </div>

                    </div>
                    {details}
                    <div>
                        <SignOut auth={this.props.auth} />
                    </div>
                    {/* {items.map(item =>(
                        <div key={item.uv}>{item.uv} {item.temp}></div>
                    ))} */}
                </div>
            );
        }
        else {
            return(
                <div>Loading results...</div>
            );
        }
    }
}

export default Result;