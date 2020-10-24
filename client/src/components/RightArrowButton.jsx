import React from "react";
import styled from "styled-components";
import RightArrow from "./RightArrow";

const Button = styled.button.attrs({
    className: "btn yellow-background red-text",
})``;

const RightArrowButton = () => {
    return (
        <Button>
            <RightArrow />
        </Button>
    );
};

export default RightArrowButton;
