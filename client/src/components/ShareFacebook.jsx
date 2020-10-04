import React from "react";
import { FacebookShareButton } from "react-share";
import { FacebookIcon } from "react-share";

const ShareFacebook = () => {
    return (
        //URL should be taken from State and linked to view image page; get hashtags from State
        <FacebookShareButton
            url="google.com"
            hashtags={["nature"]}
            quote="e-card from MoveMe:"
        >
            <FacebookIcon borderRadius={10} />
        </FacebookShareButton>
    );
};

export default ShareFacebook;
