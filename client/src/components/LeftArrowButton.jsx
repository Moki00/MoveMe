import React from "react";
import styled from "styled-components";
import LeftArrow from "./LeftArrow";

const Button = styled.button.attrs({
    className: "btn yellow-background red-text",
})``;

const LeftArrowButton = () => {
    return (
        <Button>
            <LeftArrow />
        </Button>
    );
};

export default LeftArrowButton;
