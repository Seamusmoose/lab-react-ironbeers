import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios'
export default class NewBeer extends Component {
    constructor(props) {
     super(props)  
     
     this.state = { 
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contribution_by: ''

     }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    
    handleSubmit = event => {
        // const {name, value } = event.target;
            event.preventDefault()
            console.log(this.state)
            axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render(){
        const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contribution_by} = this.state
        return (
            <div>
                <h1>New Beer</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
                    <label htmlFor="tagline">Tagline: </label>
                    <input
                    type="text"
                    id="tagline"
                    name="tagline"
                    value={this.state.tagline}
                    onChange={this.handleChange}
                    />
                    <label htmlFor="description">Description: </label>
                    <input
                    type="text"
                    id="description"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    />
                    <label htmlFor="first_brewed">First Brewed: </label>
                    <input
                    type="text"
                    id="first_brewed"
                    name="first_brewed"
                    value={this.state.first_brewed}
                    onChange={this.handleChange}
                    />
                    <label htmlFor="brewers_tips">Brewing Tips: </label>
                    <input
                    type="text"
                    id="brewers_tips"
                    name="brewers_tips"
                    value={this.state.brewers_tips}
                    onChange={this.handleChange}
                    />
                    <label htmlFor="attenuation_level ">Attenuation Level: </label>
                    <input
                    type="number"
                    id="attenuation_level"
                    name="attenuation_level "
                    value={this.state.attenuation_level}
                    onChange={this.handleNumber}
                    />
                    <label htmlFor="contributed_by ">Contributed By: </label>
                    <input
                    type="text"
                    id="contributed_by "
                    name="contributed_by"
                    value={this.state.contributed_by}
                    onChange={this.handleChange}
                    />
                    <button type="submit">Create this Beer</button>
                    </form>
            </div>
        )
    }
}