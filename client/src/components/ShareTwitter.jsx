import React, { useState, useEffect } from "react";
import { TwitterShareButton } from "react-share";
import { TwitterIcon } from "react-share";

const ShareTwitter = ({ finalUrl, random, searchTerm }) => {
    const [shortSearchTerm, setShortSearchTerm] = useState("");
    useEffect(() => {
        if (random) {
            setShortSearchTerm("random");
        } else {
            let temp = searchTerm;
            let sub = temp.replace(" ", "");
            setShortSearchTerm(sub);
        }
    }, [searchTerm, random]);
    return (
        //URL should be taken from this.state and linked to view image page; get hashtags from State
        <TwitterShareButton
            url={finalUrl}
            title="e-card from MoveMe:"
            hashtags={[shortSearchTerm]}
        >
            <TwitterIcon borderRadius={10} />
        </TwitterShareButton>
    );
};

export default ShareTwitter;
