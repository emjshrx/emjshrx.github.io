import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import './index.css';
import Home from './Home';
import Clock from './Clock';

function App () {
return (
    <HashRouter>
    <Route path = "/" exact component = {Home}/>
    <Route path = "/clock" component = {Clock} />
    </HashRouter>
)
}

export default App;