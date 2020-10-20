import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
    NavBar,
    ImgNavArea,
    QuoteNavArea,
    Footer,
    FontEdit
} from "../components";
//import Create from "../pages/Create";
import Home from "../pages/Home";
import styled from "styled-components";
import "./app.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.js";
import "popper.js/dist/popper";
import "bootstrap/dist/js/bootstrap";
import "font-awesome/css/font-awesome.css";

const AppWrapper = styled.div`
    min-height: 100vh;
    background-color: #333333;
    color: #e5e5e5
`;

const App = () => {
    return (
<FontEdit />
        // <AppWrapper>
        //     <Router>
        //         <NavBar />
        //         <Switch>
        //             <Route path="/" exact component={Home} />
        //             <Route path="/create" component={Create} />
        //         </Switch>
        //     </Router>
        //     <Footer />
        // </AppWrapper>
    );
};

export default App;
