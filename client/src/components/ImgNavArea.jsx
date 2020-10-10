import React from "react";
import styled from "styled-components";
import RightArrowButton from "./RightArrowButton";
import LeftArrowButton from "./LeftArrowButton";

const ImageNavWrapper = styled.div.attrs({
    className: "imgNavArea d-flex flex-column align-item-center text-center",
})`
    width: 45%;
`;

const ImageNavButtonWrapper = styled.div.attrs({
    className:
        "imgNavButtonWrapper d-flex justify-content-around align-items-center",
})``;

const ImgNavArea = () => {
    return (
        <ImageNavWrapper>
            <h2>Image</h2>
            <ImageNavButtonWrapper>
                <LeftArrowButton></LeftArrowButton>
                <RightArrowButton></RightArrowButton>
            </ImageNavButtonWrapper>
        </ImageNavWrapper>
    );
};

export default ImgNavArea;
