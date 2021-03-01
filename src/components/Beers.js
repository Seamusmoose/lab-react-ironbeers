 import axios from 'axios';
import React from 'react';
import Search from './Search'
import {Link} from 'react-router-dom'; 

class Beers extends React.Component {
    state = {
        beers: [],
        query: ''
    }

    setQuery = query => {
        this.setState({
          query: query
        });
      };

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response =>{
            /* console.log(response);  */
            this.setState({
                beers: response.data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
    render(){
        //const beers = this.state.beers.map(beer => <img src={beer.image_url} alt="img"/>, <p>{beer.name}</p> )
        const beers = this.state.beers.map(beer =>{
            return(
                <div>
                     <Link to={`/beers/${beer._id}`}>
                        <img style={{width:'50px'}}src={beer.image_url} alt={beer.name} />
                     </Link>
                    <h2>{beer.name}</h2>
                    <p>{beer.tagline}</p>
                    <p>{beer.contributed_by}</p>
                    
                </div>
            )
        })
        return (
            <div>
                <h1>Beers</h1> 
                <Search setQuery={this.setQuery} query={this.state.query} />
                {/* <button onClick={this.searchedItem}> */}
                    {/* Search
                    </button> */}
                
                {beers}
                
            </div>
        )
    }
}
export default Beers; 