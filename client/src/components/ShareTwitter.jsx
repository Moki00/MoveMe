import React from "react";
import { TwitterShareButton } from "react-share";
import { TwitterIcon } from "react-share";

const ShareTwitter = () => {
    return (
        //URL should be taken from State and linked to view image page; get hashtags from State
        <TwitterShareButton
            url="google.com"
            title="e-card from MoveMe:"
            hashtags={["nature"]}
        >
            <TwitterIcon borderRadius={10} />
        </TwitterShareButton>
    );
};

export default ShareTwitter;
