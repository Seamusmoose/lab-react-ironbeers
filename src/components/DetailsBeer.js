import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'; 

export default class DetailsBeer extends Component {
    state = {
        beer: null
    }

    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
        .then(response =>{
            console.log(response.data); 
            this.setState({
                beer: response.data
            }) 
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        console.log(this.state.beer)
        if (!this.state.beer) return <>Loading</>
        return (
            <div>
               <h1>{this.state.beer.name}</h1>  
               <h2>{this.state.beer.tagline}</h2>
               <p>{this.state.beer.first_brewed}</p>
               <p>{this.state.beer.attenuation_level}</p>
               <p>{this.state.beer.description}</p>
               <p>{this.state.beer.contributed_by}</p>      
            </div>
        )
    }
}
