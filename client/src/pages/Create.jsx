import React, { useState } from "react";
import { FinalImgArea, ImgPreviewArea } from "../components";
import background from "../images/blossom.jpg"; // need to get this from state passed from app.js

const Create = () => {
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
    const [finalText, setFinalText] = useState("");
    const [finalFont, setFinalFont] = useState("Ariel");
    const [finalFontSize, setFinalFontSize] = useState(0);
    const [finalFontWeight, setFinalFontWeight] = useState(0);
    const [finalTextColor, setFinalTextColor] = useState("#ffffff");
    const [finalCanvasWidth, setFinalCanvasWidth] = useState(0);
    const [finalCanvasHeight, setFinalCanvasHeight] = useState(0);
    const [finalMargin, setFinalMargin] = useState(0);
    const [finalBgColor, setFinalBgColor] = useState("#ffffff");
    const [finalBgOpacity, setFinalBgOpacity] = useState(0.2);

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
        <div>
            <p>In this page you'll see the image creation screen</p>
            <ImgPreviewArea text={text}
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
                    // background import is just for testing. remove later
                    background = {background}
                    setCanvasHeight={setCanvasHeight}
                    imgUrl={imgUrl}/>
            <FinalImgArea finalImgUrl={finalImgUrl}
                    finalText={finalText}
                    finalFont={finalFont}
                    finalFontSize={finalFontSize}
                    finalFontWeight={finalFontWeight}
                    finalTextColor={finalTextColor}
                    width={window.outerWidth}
                    finalMargin = {finalMargin}
                    finalBgColor= {finalBgColor}
                    finalBgOpacity = {finalBgOpacity}
                    generateFinalCanvas={generateFinalCanvas}
                    />
        </div>
    );
};

export default Create;
