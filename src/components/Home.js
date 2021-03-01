
import { Link } from 'react-router-dom';

import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <nav className="nav-style">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/beers">Beers</Link>
                        </li>
                        <li>
                            <Link to="/randomBeer">Random Beer</Link>
                        </li>
                        <li>
                            <Link to="/newBeer">Random new Beer</Link>
                        </li>
                       
                    </ul>
                </nav>
            </div>
        )
    }
}

