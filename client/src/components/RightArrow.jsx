import React from "react";
import styled from "styled-components";

const Arrow = styled.i.attrs({
    className: "fa fa-arrow-right",
})`
    padding: 0 10px;
`;

const RightArrow = () => {
    return <Arrow />;
};

export default RightArrow;
