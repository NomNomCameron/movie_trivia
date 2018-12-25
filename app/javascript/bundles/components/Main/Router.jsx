import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import GameRooms from '../Games/Rooms';

export default class MainRouter extends React.Component {
    constructor(props) {
        super(props)
    }

     render() {
        return(
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a href="/" className="navbar-brand">
                            Movie Trivia
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* <div className="collapse navbar-collapse" id="navbar-content">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">

                                    </a>
                                </li>
                            </ul>
                        </div> */}
                    </nav>

                    <div className="container-fluid">
                        <Route path="/" component={GameRooms} />
                        {/* <Route exact path="/campaigns" component={Campaigns} /> */}
                    </div>
                </div>
            </Router>
        )
    }
}
