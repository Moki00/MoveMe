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
    height,
    margin,
    bgColor,
    bgOpacity,
    imgUrl,
    background,
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
                height={height}
                background={background}
                setCanvasWidth={setCanvasWidth}
                id="imgCanvas"
            />
            <TextCanvas
                text={text}
                font={font}
                fontSize={fontSize}
                fontWeight={fontWeight}
                textColor={textColor}
                canvasWidth={canvasWidth}
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
