import React from "react";
import styled from "styled-components";

const ImageNavWrapper = styled.div.attrs({
    className: "imgNavArea d-flex flex-column align-item-center text-center",
})``;

const ImageNavButtonWrapper = styled.div.attrs({
    className:
        "imgNavButtonWrapper d-flex justify-content-around align-items-center",
})``;

const Button = styled.button.attrs({
    className: "btn btn-warning text-danger",
})``;

const ImgNavArea = () => {
    return (
        <ImageNavWrapper>
            <h2>Image</h2>
            <ImageNavButtonWrapper>
                <Button>prev.</Button>
                <Button>next</Button>
            </ImageNavButtonWrapper>
        </ImageNavWrapper>
    );
};

export default ImgNavArea;
