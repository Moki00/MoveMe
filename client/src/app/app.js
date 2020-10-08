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
    const [imgUrl, setImgUrl] = useState("");
    const [text, setText] = useState("Quote here");
    const [font, setFont] = useState("Ariel");
    const [fontSize, setFontSize] = useState(18);
    const [fontWeight, setFontWeight] = useState("400");
    const [textColor, setTextColor] = useState("black");
    const [canvasWidth, setCanvasWidth] = useState(0);
    const [canvasHeight, setCanvasHeight] = useState(150);
    const [margin, setMargin] = useState(10);
    const [bgColor, setBgColor] = useState("#ff00ff");
    const [bgOpacity, setBgOpacity] = useState(0.3);

    // final image state settings
    const [finalImgUrl, setFinalImgUrl] = useState("");
    const [finalText, setFinalText] = useState("Quote here");
    const [finalFont, setFinalFont] = useState("Ariel");
    const [finalFontSize, setFinalFontSize] = useState(18);
    const [finalFontWeight, setFinalFontWeight] = useState("400");
    const [finalTextColor, setFinalTextColor] = useState("black");
    const [finalCanvasWidth, setFinalCanvasWidth] = useState(0);
    const [finalCanvasHeight, setFinalCanvasHeight] = useState(150);
    const [finalMargin, setFinalMargin] = useState(10);
    const [finalBgColor, setFinalBgColor] = useState("");
    const [finalBgOpacity, setFinalBgOpacity] = useState(0);

    // remove for production. replace with functions to grap api data / user settings and set props
    const clickCanvas = () => {
        setImgUrl(background);
        setBgColor("#FF00FF");
        setBgOpacity(0.2);
        setTimeout(function () {
            setText(
                "Just some example text   happens if it gets really long? But what hapy long? But what happeple text but what happens if it gets really long? But what happeappeple text but what happens if it gets really long? But what happes if it gets really really really long?"
            );
        }, 2000);
        
    };

    const generateFinalCanvas = () =>{
        setFinalImgUrl(imgUrl)
        setFinalText(text)
        setFinalFont(font)
        setFinalFontSize(fontSize)
        setFinalFontWeight(fontWeight)
        setFinalTextColor(textColor)
        setFinalMargin(margin)
        setFinalBgColor(bgColor)
        setFinalBgOpacity(bgOpacity)
    }

    

    return (
        <div className="app">
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/create" component={Create} />
                </Switch>
                <TextCanvas
                    text={text}
                    font={font}
                    fontSize={fontSize}
                    fontWeight={fontWeight}
                    textColor={textColor}
                    clickCanvas={clickCanvas}
                    width={window.outerWidth}
                    canvasHeight={canvasHeight}
                    margin={margin}
                    bgColor={bgColor}
                    bgOpacity = {bgOpacity}
                />
                <ImgCanvas
                    imgUrl={imgUrl}
                    text={text}
                    font={font}
                    fontSize={fontSize}
                    fontWeight={fontWeight}
                    textColor={textColor}
                    width={window.outerWidth}
                    background={background}
                    setCanvasHeight={setCanvasHeight}
                />
                <FinalCanvas
                    imgUrl={finalImgUrl}
                    text={finalText}
                    font={finalFont}
                    fontSize={finalFontSize}
                    fontWeight={finalFontWeight}
                    textColor={finalTextColor}
                    width={window.outerWidth}
                    margin = {finalMargin}
                    bgColor= {finalBgColor}
                    bgOpacity = {finalBgOpacity}
                    generateFinalCanvas={generateFinalCanvas}
                /> 
            </Router>
        </div>
    );
};

export default App;
