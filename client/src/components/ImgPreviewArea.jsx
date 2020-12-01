import React from "react";
import styled from "styled-components";
import { TextCanvas, ImgCanvas } from ".";

const Wrapper = styled.div.attrs({})`
    position: relative;
`;

const ImgPreviewArea = ({
    text,
    font,
    fontSize,
    fontWeight,
    textColor,
    clickCanvas,
    canvasHeight,
    canvasWidth,
    margin,
    bgColor,
    bgOpacity,
    imgUrl,
    background,
    setCanvasHeight,
    setCanvasWidth,
}) => {
    return (
        <Wrapper>
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
                setCanvasWidth={setCanvasWidth}
                id="imgCanvas"
            />
            <TextCanvas
                text={text}
                font={font}
                fontSize={fontSize}
                fontWeight={fontWeight}
                textColor={textColor}
                clickCanvas={clickCanvas}
                canvasWidth={canvasWidth}
                canvasHeight={canvasHeight}
                margin={margin}
                bgColor={bgColor}
                bgOpacity={bgOpacity}
                id="textCanvas"
            />
        </Wrapper>
    );
};

export default ImgPreviewArea;
