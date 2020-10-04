import React, { useRef, useEffect, useState } from "react";
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
            console.log("test Width: " + testWidth);
            console.log("canvas width: " + (canvas.width - margin));
            console.log("n: " + n);
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

const TextCanvas = ({
    imgUrl,
    text,
    font,
    fontSize,
    fontWeight,
    textColor,
    lineHeight,
    canvasWidth,
    canvasHeight,
    margin,
    clickCanvas,
    width,
}) => {
    // we use a ref to access the canvas' DOM node
    const canvasRef = useRef(null);

    //handle Click canvas
    const handleClickCanvas = () => {
        clickCanvas();
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
        canvasRef.current.height = canvasHeight;
    }, []);

    // resize text canvas when image canvas changes height
    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
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
                onClick={handleClickCanvas}
                width={window.outerWidth}
            />
        </div>
    );
};

const ImgCanvas = ({
    imgUrl,
    text,
    font,
    fontSize,
    fontWeight,
    textColor,
    lineHeight,
    canvasWidth,
    canvasHeight,
    margin,
    clickCanvas,
    setCanvasHeight,
}) => {
    // we use a ref to access the canvas' DOM node
    const canvasRef = useRef(null);

    // remove for production
    //handle Click canvas
    const handleClickCanvas = () => {
        clickCanvas();
    };

    const handleSetCanvasHeight = (height) => {
        setCanvasHeight(height);
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
            // set height of canvas to ratio determined by base_image width/height ratio
            const ratio = base_image.height / base_image.width;
            const newHeight = canvasRef.current.width * ratio;

            // not setting state properly
            handleSetCanvasHeight(newHeight);

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
                onClick={handleClickCanvas}
                width={window.outerWidth}
            />
        </div>
    );
};

const FinalCanvas = ({
    imgUrl,
    text,
    font,
    fontSize,
    fontWeight,
    textColor,
    lineHeight,
    canvasWidth,
    canvasHeight,
    margin,
    clickCanvas,
    background,
    width,
}) => {
    // we use a ref to access the canvas' DOM node
    const canvasRef = useRef(null);

    // remove for production
    //handle Click canvas
    const handleClickCanvas = () => {
        clickCanvas();
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
                onClick={handleClickCanvas}
                width={window.outerWidth}
            />
        </div>
    );
};

export { TextCanvas, ImgCanvas, FinalCanvas };
