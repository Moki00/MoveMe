import React from "react";
import styled from "styled-components";
import { FacebookShareButton } from "react-share";
import { FacebookIcon } from "react-share";

// const Button = styled.button.attrs({
//     className: "",
// })``;

const ShareFacebook = () => {
    return (
        //URL should be taken from State and linked to view image page; get hashtags from State
        <FacebookShareButton
            url="google.com"
            hashtags={["nature"]}
        >
            <FacebookIcon borderRadius={10} />
        </FacebookShareButton>
    );
};

export default ShareFacebook;
