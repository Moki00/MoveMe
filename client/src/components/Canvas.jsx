import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const CanvasElement = styled.canvas.attrs({ className: "w-100" })`
    border: 1px solid black;
`;

const wrapText = (
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
) => {
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
        offset += newSize / 4;
        x += newSize / 5;

        // draw each line in correct place on canvas
        lines.forEach((element) => {
            context.fillText(element, x, offset);
            offset += newSize;
        });
        break;
    }
};

const addAttribution = (canvas, context, textColor, photographer, source) => {
    context.textAlign = "end";
    context.fillStyle = textColor;
    context.font = "normal 10px Georgia";

    const attribution = `Made by MoveMe. Photo by ${photographer} on ${source}`;
    const x = canvas.width;
    const y = canvas.height;
    context.fillText(attribution, x - 5, y - 5);
};

const TextCanvas = ({
    text,
    font,
    fontSize,
    fontWeight,
    textColor,
    canvasHeight,
    margin,
    bgColor,
    bgOpacity,
    id,
}) => {
    // we use a ref to access the canvas' DOM node
    const canvasRef = useRef(null);

    // handle changing text or background overlay
    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        // clear canvas
        context.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
        );

        //draw overlay
        context.save();
        context.globalAlpha = bgOpacity;
        context.fillStyle = bgColor;
        context.fillRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
        );
        context.restore();

        // write text in centre
        setTimeout(
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
            ),
            500
        );
    }, [
        text,
        font,
        fontSize,
        fontWeight,
        textColor,
        margin,
        bgColor,
        bgOpacity,
    ]);

    useEffect(() => {
        const styleWidth =
            window.outerWidth * 2 > 1200 ? 1200 : window.outerWidth * 2;
        canvasRef.current.style.width = styleWidth;
        canvasRef.current.height = canvasHeight;
    }, [canvasHeight]);

    // resize text canvas when image canvas changes height
    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        canvasRef.current.height = canvasHeight;

        //draw overlay
        context.save();
        context.globalAlpha = bgOpacity;
        context.fillStyle = bgColor;
        context.fillRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
        );
        context.restore();

        // redraw the text at new height
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
                text={text}
                font={font}
                fontSize={fontSize}
                fontWeight={fontWeight}
                textColor={textColor}
                width={window.outerWidth}
                id={id}
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
    setCanvasHeight,
    id,
}) => {
    // we use a ref to access the canvas' DOM node
    const canvasRef = useRef(null);

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
            if (canvasRef.current === null) {
                console.log("rendering canvas pre width");
                return;
            }

            // set height of canvas to ratio determined by base_image width/height ratio
            const ratio = base_image.height / base_image.width;
            const newHeight = canvasRef.current.width * ratio;
            const maxHeight = 518;
            // Here need to check if image newHeight is larger than 518px.
            // if it is, set height to 518 and then set image width determined by ratio of image.
            // if not, just do normal code that we have already
            if (newHeight > maxHeight) {
                // set canvas width here based on ratio we determined earlier and 518px height
                handleSetCanvasHeight(maxHeight);
                canvasRef.current.height = maxHeight;
            } else {
                handleSetCanvasHeight(newHeight);

                // if (canvasRef.current === null) {
                //     console.log("rendering canvas pre height");
                //     return;
                // }

                canvasRef.current.height = newHeight;
            }

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
                width={window.outerWidth}
                id={id}
            />
        </div>
    );
};

const FinalCanvas = ({
    finalImgUrl,
    finalText,
    finalFont,
    finalFontSize,
    finalFontWeight,
    finalTextColor,
    finalMargin,
    finalBgColor,
    finalBgOpacity,
    generateFinalCanvas,
    photographer,
    id,
}) => {
    const canvasRef = useRef(null);

    // handle creating final image
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
        base_image.src = finalImgUrl;

        base_image.onload = function () {
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

            //draw overlay
            context.save();
            context.globalAlpha = finalBgOpacity;
            context.fillStyle = finalBgColor;
            context.fillRect(
                0,
                0,
                canvasRef.current.width,
                canvasRef.current.height
            );
            context.restore();

            // write quote
            wrapText(
                canvasRef.current,
                context,
                finalText,
                canvasRef.current.width / 2,
                canvasRef.current.height / 2,
                finalMargin,
                finalFont,
                finalFontSize,
                finalTextColor,
                finalFontWeight
            );

            // add attribution
            addAttribution(
                canvasRef.current,
                context,
                finalTextColor,
                photographer,
                "Unsplash"
            );
        };
        // should this just keep track of a state var e.g. "generated" then run this function? Set true in generate final function?
    }, [
        finalImgUrl,
        finalText,
        finalFont,
        finalFontSize,
        finalFontWeight,
        finalTextColor,
        finalMargin,
        finalBgColor,
        finalBgOpacity,
    ]);

    // handle changing text
    // useEffect(() => {
    //     const context = canvasRef.current.getContext("2d");
    //     //draw overlay
    //     context.save();
    //     context.globalAlpha = finalBgOpacity;
    //     context.fillStyle = finalBgColor;
    //     context.fillRect(0,0,canvasRef.current.width,canvasRef.current.height);
    //     context.restore();

    //     wrapText(
    //         canvasRef.current,
    //         context,
    //         finalText,
    //         canvasRef.current.width / 2,
    //         canvasRef.current.height / 2,
    //         finalMargin,
    //         finalFont,
    //         finalFontSize,
    //         finalTextColor,
    //         finalFontWeight
    //     );
    // }, [finalText, finalFont, finalFontSize, finalFontWeight, finalTextColor, finalMargin,  finalBgColor, finalBgOpacity]);

    // set style width of canvas to fixed value
    useEffect(() => {
        const styleWidth =
            window.outerWidth * 2 > 1200 ? 1200 : window.outerWidth * 2;
        canvasRef.current.style.width = styleWidth;
    }, []);

    const handleGenerateFinalCanvas = () => {
        console.log("making the final image");
        generateFinalCanvas();
    };

    return (
        <div>
            <CanvasElement
                ref={canvasRef}
                // imgUrl={imgUrl}
                // text={text}
                // font={font}
                // fontSize={fontSize}
                // fontWeight={fontWeight}
                // textColor={textColor}
                width={window.outerWidth}
                onClick={handleGenerateFinalCanvas}
                id={id}
            />
        </div>
    );
};

export { TextCanvas, ImgCanvas, FinalCanvas };
