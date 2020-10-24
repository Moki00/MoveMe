import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer.attrs({
    className: "footer yellow-background w-100",
})`
    bottom: 0;
    position: fixed;
`;

const FooterDiv = styled.div.attrs({
    className: "container d-flex justify-content-around",
})``;

const MutedText = styled.span.attrs({
    className: "text-muted",
})``;

const FooterLink = styled.a.attrs({
    className: "red-text",
    href: "https://github.com/moki929/MoveMe",
})``;

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterDiv>
                <MutedText>
                    &copy; {new Date().getFullYear()} Copyright |{" "}
                    <FooterLink>Morgan & Morgan</FooterLink>
                </MutedText>
            </FooterDiv>
        </FooterWrapper>
    );
};

export default Footer;
