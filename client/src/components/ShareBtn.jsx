import React from "react";
import styled from "styled-components";

const Button = styled.button.attrs({
    className: "btn btn-lg yellow-background red-text shareBtn w-75",
    type: "button",
})`
    height: 100px;
`;

const Text = styled.div.attrs({
    className: "font-weight-bold shareText",
})`
    font-size: 35px;
`;

const ShareBtn = () => {
    return (
        <Button data-toggle="modal" data-target="#shareModal">
            <Text>SHARE</Text>
        </Button>
    );
};

export default ShareBtn;
