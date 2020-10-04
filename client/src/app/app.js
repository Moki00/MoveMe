import React, { useRef, useEffect, useState } from "react";
import background from "../images/blossom.jpg"; // need to get this from state passed from app.js
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar, TextCanvas, ImgCanvas, FinalCanvas } from "../components";
import Create from "../pages/Create";
import Home from "../pages/Home";
import "./app.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.js";
import "popper.js/dist/popper";
import "bootstrap/dist/js/bootstrap";
import "font-awesome/css/font-awesome.css";

const App = () => {
    const [imgUrl, setImgUrl] = useState();
    const [text, setText] = useState("Quote here");
    const [font, setFont] = useState("Ariel");
    const [fontSize, setFontSize] = useState(18);
    const [fontWeight, setFontWeight] = useState("400");
    const [textColor, setTextColor] = useState("black");
    const [lineHeight, setLineHeight] = useState(18);
    const [canvasWidth, setCanvasWidth] = useState();
    const [canvasHeight, setCanvasHeight] = useState(150);
    const [margin, setMargin] = useState(10);

    const clickCanvas = () => {
        setImgUrl(background);
        setTimeout(function () {
            setText(
                "Just some example text  long? But what hple text but what happens if it gets reallut what hplut what hple text but what happens if it gets reallut what hplut what hple text but what happens if it gets reallut what hple text but what happens if it gets really long? But what haput what hple text but what happens if it gets really long? But what hapy long? But what happeple text but what happens if it gets really long? But what happeappeple text but what happens if it gets really long? But what happes if it gets really really really long?"
            );
        }, 2000);
    };

    return (
        <div className="app">
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/create" component={Create} />
                </Switch>
                <TextCanvas
                    // ref={canvasRef}
                    // imgUrl={imgUrl}
                    text={text}
                    font={font}
                    fontSize={fontSize}
                    fontWeight={fontWeight}
                    textColor={textColor}
                    clickCanvas={clickCanvas}
                    width={window.outerWidth}
                    canvasHeight={canvasHeight}
                    margin={margin}
                />
                {/* <ImgCanvas
                    // ref={canvasRef}
                    imgUrl={imgUrl}
                    text={text}
                    font={font}
                    fontSize={fontSize}
                    fontWeight={fontWeight}
                    textColor={textColor}
                    // clickCanvas={clickCanvas}
                    width={window.outerWidth}
                    background={background}
                    setCanvasHeight={setCanvasHeight}
                />
                <FinalCanvas
                    // ref={canvasRef}
                    imgUrl={imgUrl}
                    text={text}
                    font={font}
                    fontSize={fontSize}
                    fontWeight={fontWeight}
                    textColor={textColor}
                    clickCanvas={clickCanvas}
                    width={window.outerWidth}
                    margin = {margin}
                /> */}
            </Router>
        </div>
    );
};

export default App;
