import React from "react";
import styled from "styled-components";

const Arrow = styled.i.attrs({
    className: "fa fa-arrow-left",
})`
    padding: 0 10px;
`;

const LeftArrow = () => {
    return <Arrow />;
};

export default LeftArrow;
