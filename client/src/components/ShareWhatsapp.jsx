import React from "react";
import { WhatsappShareButton } from "react-share";
import { WhatsappIcon } from "react-share";

const ShareWhatsapp = ({ finalUrl }) => {
    return (
        //URL should be taken from State and linked to view image page; get hashtags from State
        <WhatsappShareButton
            url={finalUrl}
            title="e-card from MoveMe:"
            separator=" "
        >
            <WhatsappIcon borderRadius={10} />
        </WhatsappShareButton>
    );
};

export default ShareWhatsapp;
