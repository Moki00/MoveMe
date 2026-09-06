import React from "react";
import { FinalCanvas } from ".";

const FinalImgArea = ({
    finalImgUrl,
    finalText,
    finalCanvasHeight,
    finalCanvasWidth,
    finalFont,
    finalFontSize,
    finalFontWeight,
    finalTextColor,
    finalMargin,
    finalBgColor,
    finalBgOpacity,
    generateFinalCanvas,
    photographer,
    setFinalDataURI,
}) => {
    return (
        <div>
            <FinalCanvas
                finalImgUrl={finalImgUrl}
                finalCanvasHeight={finalCanvasHeight}
                finalCanvasWidth={finalCanvasWidth}
                finalText={finalText}
                finalFont={finalFont}
                finalFontSize={finalFontSize}
                finalFontWeight={finalFontWeight}
                finalTextColor={finalTextColor}
                width={window.outerWidth}
                finalMargin={finalMargin}
                finalBgColor={finalBgColor}
                finalBgOpacity={finalBgOpacity}
                generateFinalCanvas={generateFinalCanvas}
                photographer={photographer}
                setFinalDataURI={setFinalDataURI}
                id="finalCanvas"
            />
        </div>
    );
};

export default FinalImgArea;
