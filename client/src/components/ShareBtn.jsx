import React from "react";
import styled from "styled-components";

const Button = styled.button.attrs({
    className: "btn btn-lg btn-warning text-danger shareBtn w-75",
    type: "button",
})``;

const Text = styled.div.attrs({
    className: "font-weight-bold shareText",
})``;

const ShareBtn = () => {
    return (
        <Button data-toggle="modal" data-target="#shareModal">
            <Text>SHARE</Text>
        </Button>
    );
};

export default ShareBtn;
