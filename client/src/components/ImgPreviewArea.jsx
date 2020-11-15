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
    canvasWidth,
    canvasHeight,
    height,
    margin,
    bgColor,
    bgOpacity,
    imgUrl,
    background,
    setCanvasWidth,
    setCanvasHeight,
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
                height={height}
                background={background}
                setCanvasWidth={setCanvasWidth}
                setCanvasHeight={setCanvasHeight}
                id="imgCanvas"
            />
            <TextCanvas
                text={text}
                font={font}
                fontSize={fontSize}
                fontWeight={fontWeight}
                textColor={textColor}
                canvasWidth={canvasWidth}
                canvasHeight={canvasHeight}
                height={height}
                margin={margin}
                bgColor={bgColor}
                bgOpacity={bgOpacity}
                id="textCanvas"
            />
        </Wrapper>
    );
};

export default ImgPreviewArea;
