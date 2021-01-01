import React,{ Fragment } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css'

//* Components
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import PlayerSearch from './components/PlayerSearch';
import Player from './components/Player';

const App = () => {
    return (
        <Fragment>
            <Router>
                <NavBar/>
                <Route path="/" component={Hero} exact/>
                <Route path="/playersearch" component={PlayerSearch}/>
                <Route path="/player/:id" component={Player}/>
                <Route/>
                <Route/>
                <Route/>
            </Router>
        </Fragment>
    )
}

export default App
