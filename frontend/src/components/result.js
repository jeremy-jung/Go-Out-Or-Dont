/*  Locations list
    Created on 12/12/2020 by Carys Kong
    Edited on 15/12/2020 by Jeremy Jung
*/

import React from 'react';
import { render } from 'react-dom';
import ProgressBar from "./progressBar.js";
import FrownyFace from "./frownyFace.png";
import SignOut from './SignOut.js';
import style from './button.module.css';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



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
            var learningMore = this.state.learningMore;
            let score;
            let message = '';
            
            if (this.state.items[3].goout == true) {
                message = 'You should go out today!';
            }
            else {
                message = 'Maybe you should stay home today...';
            }

            let details;

            if (learningMore) {
                    details = <div style={{marginBottom: '30px'}} class="detailedResult"><br/>
                        <div style={{color: '#ffff', fontSize: '13px'}}>The higher the score, the better the condition is! So if your results said not to leave the house but COVID-19 is 5/5, at least you know you're safe!</div>
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
                    <div>
                        <div class="simpleResult">
                            {score}
                            <div>
                                <p style={{ marginTop: '35px', fontSize: '25px'}}>{message}</p>
                                <button onClick={this.handleLearnMore}>see why</button>
                                <p></p>
                            </div>

                        </div>
                        {details}

                    </div>
                    <div> 
                    </div>
                    <div>
                        <Link to = "/locations" className = {style.button} style={{fontSize: '15px', borderRadius: '20px', backgroundColor: 'rgba(255,255,255,0.3)'}}>back to list</Link>
                        <br/> <br/>
                        <SignOut auth={this.props.auth} />
                    </div>
                </div>
            );
        }
        else {
            return(
                <div style={{color: '#ffff'}}>Loading results...</div>
            );
        }
    }
}

export default Result;