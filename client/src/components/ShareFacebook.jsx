import React, { useState, useEffect } from "react";
import { FacebookShareButton } from "react-share";
import { FacebookIcon } from "react-share";

const ShareFacebook = ({ finalUrl, random, searchTerm }) => {
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
        //URL should be taken from State and linked to view image page; get hashtags from State
        <FacebookShareButton
            url={finalUrl}
            hashtags={[shortSearchTerm]}
            quote="e-card from MoveMe:"
        >
            <FacebookIcon borderRadius={10} />
        </FacebookShareButton>
    );
};

export default ShareFacebook;
