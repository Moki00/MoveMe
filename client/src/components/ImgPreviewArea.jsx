import React from 'react';
import { TextCanvas, ImgCanvas } from ".";

const ImgPreviewArea = ({
    text,
    font,
    fontSize,
    fontWeight,
    textColor,
    clickCanvas,
    canvasHeight,
    margin,
    bgColor,
    bgOpacity,
    imgUrl,
    background,
    setCanvasHeight,
}) => {
    return (
        <div>
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
                
        </div>
    )
}

export default ImgPreviewArea
