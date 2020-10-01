import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar} from "../components";
import Create from "../pages/Create";
import Home from "../pages/Home";
import "./app.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.js";
import "popper.js/dist/popper";
import "bootstrap/dist/js/bootstrap";

const App = () => {
    return (
        <div className="app">
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/create" component={Create} />
                </Switch>      
            </Router>            
        </div>
    );
};

export default App;
