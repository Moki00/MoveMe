import React from "react";
import styled from "styled-components";

const Button = styled.button.attrs({
    type: "button",
    className: "btn btn-primary",
})``;

const RandomB = ({ getQuote }) => {
    const handleGetQuote = () => {
        getQuote();
    };
    return <Button onClick={handleGetQuote}>Random</Button>;
};

export default RandomB;
