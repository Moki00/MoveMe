import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { NavBar } from "../components";
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
            </Router>
        </div>
    );
};

export default App;
