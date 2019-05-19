import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Button } from '@material-ui/core';


import Home from '../../containers/home/';
import History from '../../containers/history/';
import Reddit from '../../containers/reddit/';


const navigationJSON = [
    {id: 1, url: '/', name: 'Homepage', variant:'outlined', color: 'primary'},
    {id: 2, url: '/reddit/', name: 'Reddit', variant:'outlined', color: 'primary'},
    {id: 3, url: '/history/', name: 'History', variant:'outlined', color: 'primary'},
];

const Navigation = () => {
    return(
        <Router>
            <div>
                <ul className="nav">
                    {navigationJSON.map((navItem, index) => (
                        <li key={`${navItem.id}${index}`}>
                            <Button 
                            variant={navItem.variant} 
                            color={navItem.color}
                            component={Link} 
                            to={navItem.url}
                            >
                                {navItem.name}
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
            <NavigationRoute />
        </Router>
    );
}

const NavigationRoute = () => {
    return (
        <Fragment>
            <Route exact path="/" component={Home}/>
            <Route path="/history/" component={History} />
            <Route path="/Reddit/" component={Reddit} />
        </Fragment>
    )
}

export default Navigation;