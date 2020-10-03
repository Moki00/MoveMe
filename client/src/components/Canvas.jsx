import React, { useRef, useEffect, useState } from "react";
import background from "../images/blossom.jpg"; // need to get this from state passed from app.js
import styled from "styled-components";

const CanvasElement = styled.canvas.attrs({ className: "w-100" })`
    border: 1px solid black;
`;

function wrapText(context, text, x, y, maxWidth, lineHeight) {
    const words = text.split(" ");
    let line = "";
    let lines = [];

    // split sentence into lines less than certain width
    for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + " ";
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            lines.push(line);
            line = words[n] + " ";
        } else {
            line = testLine;
        }
    }

    // push the left over line
    lines.push(line);

    // centre vertically
    let offset = y - lineHeight * (lines.length / 2) + lineHeight / 2;
    lines.forEach((element) => {
        context.fillText(element, x, offset);
        offset += lineHeight;
    });
}

const Canvas = () => {
    // we use a ref to access the canvas' DOM node
    const canvasRef = useRef(null);

    // Need to use state here for url to image and quote. Move it up to app.js later
    const [imgUrl, setImgUrl] = useState();
    const [text, setText] = useState("Quote here");
    const [font, setFont] = useState("Ariel");
    const [fontSize, setFontSize] = useState(18);
    const [fontWeight, setFontWeight] = useState("bold");
    const [textColor, setTextColor] = useState("black");

    const clickCanvas = () => {
        // remove this for production
        console.log("clicked canvas");
        setText(
            "Just some example text but what happens if it gets really long? But what happens if it gets really really really long?"
        );
        // setImgUrl(background);
    };

    // handle changing image
    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        // clear old image
        context.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
        );
        let base_image = new Image();
        base_image.src = imgUrl;

        base_image.onload = function () {
            // set width of canvas to fixed value.
            // set height of canvas to ratio determined by base_image width/height ratio
            const ratio = base_image.height / base_image.width;
            canvasRef.current.height = canvasRef.current.width * ratio;

            // set size of image to match new canvas size
            context.drawImage(
                base_image,
                0,
                0,
                canvasRef.current.width,
                canvasRef.current.height
            );
        };
    }, [imgUrl]);

    // handle changing text
    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
        );
        context.fillStyle = textColor;
        context.font = `${fontWeight} ${fontSize}px ${font}`;
        context.textAlign = "center";

        wrapText(
            context,
            text,
            canvasRef.current.width / 2,
            canvasRef.current.height / 2,
            canvasRef.current.width - 10,
            fontSize
        );
    }, [text, font, fontSize, fontWeight, textColor]);

    return (
        <div>
            <CanvasElement
                ref={canvasRef}
                imgUrl={imgUrl}
                text={text}
                font={font}
                fontSize={fontSize}
                fontWeight={fontWeight}
                textColor={textColor}
                onClick={clickCanvas}
            />
        </div>
    );
};

export default Canvas;
