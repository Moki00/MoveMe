import React from "react";
import styled from "styled-components";
import { TwitterShareButton } from "react-share";

const Button = styled.button.attrs({
    className: "btn btn-lg btn-warning text-danger shareBtn w-75",
    type: "button",
})`
    height: 100px;
`;

const Text = styled.div.attrs({
    className: "font-weight-bold shareText",
})`
    font-size: 35px;
`;

const ShareTwitter = () => {
    return (
        <Button data-toggle="modal" data-target="#shareModal">
            <TwitterIcon size={32} round={true} />;
        </Button>
    );
};

export default ShareTwitter;
