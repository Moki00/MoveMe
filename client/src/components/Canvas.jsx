import React, { useRef, useEffect, useState } from "react";
import background from "../images/blossom.jpg"; // need to get this from state passed from app.js
import styled from "styled-components";

const CanvasElement = styled.canvas.attrs({ className: "w-100" })`
    border: 1px solid black;
`;

function wrapText(
    canvas,
    context,
    text,
    x,
    y,
    margin,
    font,
    fontSize,
    textColor,
    fontWeight
) {
    const words = text.split(" ");

    // reduce font size until all fits in canvas for long quotes
    for (var newSize = fontSize; newSize >= 1; newSize--) {
        // set text style
        context.textAlign = "center";
        context.fillStyle = textColor;
        context.font = `${fontWeight} ${newSize}px ${font}`;

        let line = "";
        let lines = [];

        // split sentence into lines less than certain width
        for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + " ";
            var metrics = context.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > canvas.width - margin && n > 0) {
                lines.push(line);
                line = words[n] + " ";
            } else {
                line = testLine;
            }
        }
        // push the remaining line
        lines.push(line);

        // offset determines the starting y coord of the text
        let offset = y - newSize * (lines.length / 2) + newSize / 2;

        // check to see if text starts outside set margin
        if (offset < margin) {
            // move to next font size
            continue;
        }

        // fiddle to get it into centre
        offset += 4;

        // draw each line in correct place on canvas
        lines.forEach((element) => {
            context.fillText(element, x, offset);
            offset += newSize;
        });
        break;
    }
}

const TextCanvas = () => {
    // we use a ref to access the canvas' DOM node
    const canvasRef = useRef(null);

    // Need to use state here for url to image and quote. Move it up to app.js later
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

    // remove this for production
    const clickCanvas = () => {
        setImgUrl(background);
        setTimeout(function () {
            setText(
                "Just some example text  long? But what hple text but what happens if it gets reallut what hplut what hple text but what happens if it gets reallut what hplut what hple text but what happens if it gets reallut what hple text but what happens if it gets really long? But what haput what hple text but what happens if it gets really long? But what hapy long? But what happeple text but what happens if it gets really long? But what happeappeple text but what happens if it gets really long? But what happes if it gets really really really long?"
            );
        }, 2000);
    };

    // handle changing text
    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
        );

        wrapText(
            canvasRef.current,
            context,
            text,
            canvasRef.current.width / 2,
            canvasRef.current.height / 2,
            margin,
            font,
            fontSize,
            textColor,
            fontWeight
        );
    }, [text, font, fontSize, fontWeight, textColor, margin, lineHeight]);

    useEffect(() => {
        const styleWidth =
            window.outerWidth * 2 > 1200 ? 1200 : window.outerWidth * 2;
        canvasRef.current.style.width = styleWidth;
    }, []);

    // resize text canvas when image canvas changes height
    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        console.log(canvasHeight);
        console.log(canvasRef.current.height);
        canvasRef.current.height = canvasHeight;
        wrapText(
            canvasRef.current,
            context,
            text,
            canvasRef.current.width / 2,
            canvasRef.current.height / 2,
            margin,
            font,
            fontSize,
            textColor,
            fontWeight
        );
    }, [canvasHeight]);

    // need to extract width and height to state so both text and image canvases are same height?
    // make sure the text is re-written in the text canvas
    // useEffect(() => {
    //     canvasRef.current.height = canvasHeight;
    //     canvasRef.current.width = canvasWidth;
    // }, [canvasHeight, canvasWidth]);

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
                width={window.outerWidth}
            />
        </div>
    );
};

const ImgCanvas = () => {
    // we use a ref to access the canvas' DOM node
    const canvasRef = useRef(null);

    // Need to use state here for url to image and quote. Move it up to app.js later
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

    // remove this for production
    const clickCanvas = () => {
        setImgUrl(background);
        setTimeout(function () {
            setText(
                "Just some example text  long? But what hple text but what happens if it gets reallut what hplut what hple text but what happens if it gets reallut what hplut what hple text but what happens if it gets reallut what hple text but what happens if it gets really long? But what haput what hple text but what happens if it gets really long? But what hapy long? But what happeple text but what happens if it gets really long? But what happeappeple text but what happens if it gets really long? But what happes if it gets really really really long?"
            );
        }, 2000);
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
            const newHeight = canvasRef.current.width * ratio;
            console.log(newHeight);
            setCanvasHeight(newHeight);

            console.log("canvasheight:" + canvasHeight);
            canvasRef.current.height = newHeight;

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

    useEffect(() => {
        const styleWidth =
            window.outerWidth * 2 > 1200 ? 1200 : window.outerWidth * 2;
        canvasRef.current.style.width = styleWidth;
    }, []);

    // need to extract width and height to state so both text and image canvases are same height?
    // make sure the text is re-written in the text canvas
    // useEffect(() => {
    //     canvasRef.current.height = canvasHeight;
    //     canvasRef.current.width = canvasWidth;
    // }, [canvasHeight, canvasWidth]);

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
                width={window.outerWidth}
            />
        </div>
    );
};

const FinalCanvas = () => {
    // we use a ref to access the canvas' DOM node
    const canvasRef = useRef(null);

    // Need to use state here for url to image and quote. Move it up to app.js later
    const [imgUrl, setImgUrl] = useState();
    const [text, setText] = useState("Quote here");
    const [font, setFont] = useState("Ariel");
    const [fontSize, setFontSize] = useState(18);
    const [fontWeight, setFontWeight] = useState("400");
    const [textColor, setTextColor] = useState("black");
    const [lineHeight, setLineHeight] = useState(18);
    const [canvasWidth, setCanvasWidth] = useState();
    const [canvasHeight, setCanvasHeight] = useState();
    const [margin, setMargin] = useState(10);

    // remove this for production
    const clickCanvas = () => {
        setImgUrl(background);
        setTimeout(function () {
            setText(
                "Just some example text  long? But what hple text but what happens if it gets reallut what hplut what hple text but what happens if it gets reallut what hplut what hple text but what happens if it gets reallut what hple text but what happens if it gets really long? But what haput what hple text but what happens if it gets really long? But what hapy long? But what happeple text but what happens if it gets really long? But what happeappeple text but what happens if it gets really long? But what happes if it gets really really really long?"
            );
        }, 2000);
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

        wrapText(
            canvasRef.current,
            context,
            text,
            canvasRef.current.width / 2,
            canvasRef.current.height / 2,
            margin,
            font,
            fontSize,
            textColor,
            fontWeight
        );
    }, [text, font, fontSize, fontWeight, textColor, margin, lineHeight]);

    useEffect(() => {
        const styleWidth =
            window.outerWidth * 2 > 1200 ? 1200 : window.outerWidth * 2;
        canvasRef.current.style.width = styleWidth;
    }, []);

    // need to extract width and height to state so both text and image canvases are same height?
    // make sure the text is re-written in the text canvas
    // useEffect(() => {
    //     canvasRef.current.height = canvasHeight;
    //     canvasRef.current.width = canvasWidth;
    // }, [canvasHeight, canvasWidth]);

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
                width={window.outerWidth}
            />
        </div>
    );
};

export { TextCanvas, ImgCanvas, FinalCanvas };
