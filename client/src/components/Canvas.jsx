import React, { useRef, useEffect, useState } from "react";
import background from "../images/blossom.jpg"; // need to get this from state passed from app.js
import styled from "styled-components";

const CanvasElement = styled.canvas.attrs({})`
    border: 1px solid black;
`;

const Canvas = () => {
    // we use a ref to access the canvas' DOM node
    const canvasRef = useRef(null);

    // Need to use state here for url to image and quote. Move it up to app.js later
    const [imgUrl, setImgUrl] = useState();

    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        // Need to do all drawing here
        context.fillStyle = "black";
        context.font = "bold 18px Arial";

        let base_image = new Image();
        base_image.src = background;
        base_image.height = canvasRef.current.height;

        base_image.onload = function () {
            // need to wait for image to load before drawing otherwise can't find it
            context.drawImage(base_image, 0, 0);
            context.fillText(
                "Text",
                canvasRef.current.width / 2 - 17,
                canvasRef.current.height / 2 + 8
            );
            // context.clearRect(
            //     0,
            //     0,
            //     canvasRef.current.width,
            //     canvasRef.current.height
            // );

            // NOTE: Clear rect deletes background, too. need to have two canvases
        };
    }, [canvasRef]);

    return (
        <div>
            <CanvasElement ref={canvasRef} />
        </div>
    );
};

export default Canvas;
