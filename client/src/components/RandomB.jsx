import React from "react";
import styled from "styled-components";

const Button = styled.button.attrs({
    type: "button",
    className: "btn btn-primary",
})``;

const RandomB = () => {
    return <Button>Random</Button>;
};

export default RandomB;
