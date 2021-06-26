import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Routes from "./routes";

function App() { 
    return <div>
        <Router>
        <Routes />
        </Router>
    </div>
}

export default App;