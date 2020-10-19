import React from "react";
import styled from "styled-components";
import ShareTwitter from "./ShareTwitter";
import ShareFacebook from "./ShareFacebook";
import ShareWhatsapp from "./ShareWhatsapp";

const ModalWrapper = styled.div.attrs({
    className: "modal fade",
    id: "shareModal",
    role: "dialog",
    tabindex: "-1",
})``;

const ModalDialog = styled.div.attrs({
    className: "modal-dialog modal-dialog-centered",
})``;

const ModalContent = styled.div.attrs({
    className: "modal-content",
})``;

const ModalHeader = styled.div.attrs({
    className: "modal-header",
})``;

const ModalHeaderButton = styled.button.attrs({
    className: "close",
    type: "button",
    role: "dialog",
})``;

const ModalCloseButton = styled.button.attrs({
    className: "btn btn-warning text-danger",
    type: "button",
})``;

const ModalBody = styled.div.attrs({
    className: "modal-body d-flex flex-row justify-content-around",
})``;

const ModalFooter = styled.div.attrs({
    className: "modal-footer",
})``;

const ModalTitle = styled.h5.attrs({
    className: "modal-title",
    id: "shareModalLabel",
})``;

const ShareModal = ({ finalUrl, random, searchTerm }) => {
    return (
        <ModalWrapper aria-labelledby="shareModalLabel" aria-hidden="true">
            <ModalDialog role="document">
                <ModalContent>
                    <ModalHeader>
                        <ModalTitle>Share</ModalTitle>
                        <ModalHeaderButton
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </ModalHeaderButton>
                    </ModalHeader>
                    <ModalBody>
                        {/* card preview here? */}
                        <ShareFacebook
                            finalUrl={finalUrl}
                            searchTerm={searchTerm}
                            random={random}
                        />
                        <ShareTwitter
                            finalUrl={finalUrl}
                            searchTerm={searchTerm}
                            random={random}
                        />
                        <ShareWhatsapp finalUrl={finalUrl} />
                    </ModalBody>
                    <ModalFooter>
                        <ModalCloseButton data-dismiss="modal">
                            Close
                        </ModalCloseButton>
                    </ModalFooter>
                </ModalContent>
            </ModalDialog>
        </ModalWrapper>
    );
};

export default ShareModal;
