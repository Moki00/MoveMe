import React, { useState, useRef, useEffect } from "react";
import { CreateLinkButton } from "../components";
import api from "../api";
import styled from "styled-components";

const ViewPageWrapper = styled.div.attrs({
    className: "container d-flex flex-column justify-content-center",
})`
    height: 80vh;
    font-size: 1rem !important;
`;

const Img = styled.img.attrs({
    className: "img",
})`
    border: 1px solid black;
`;

const ImgWrapper = styled.div.attrs({
    className: "col-12 d-flex justify-content-center",
})``;

const ButtonWrapper = styled.div.attrs({
    className: "col-12 d-flex justify-content-center mt-5",
})``;

const CardGet = ({ match }) => {
    const imgRef = useRef(null);
    const [img, setImg] = useState("");
    const [height, setHeight] = useState("auto");
    const [width, setWidth] = useState("95%");

    useEffect(() => {
        // Need backend in place before proceeding
        api.getCard(match.params.id).then((card) => {
            // check if mobile device
            console.log(card);
            const src = "data:image/png;base64," + card.data.data; // need to check this is the base64
            let isMobile = window.matchMedia(
                "only screen and (max-width: 992px)"
            ).matches;
            if (isMobile) {
                console.log("mobile device");
                setWidth("95%");
            } else {
                // get img and make Img object
                const image = new Image();

                image.src = src;
                image.onload = function () {
                    // if ratio > 1 then portrait (or square)
                    const ratio = image.height / image.width;

                    // set fixed width of landscape and height of portrait
                    if (ratio > 1) {
                        console.log("portrait/square");
                        setHeight("70%"); // not sure % works for height. may need to use css and ref
                        setWidth("auto");
                    } else {
                        console.log("landscape");
                        setWidth("60%");
                        setHeight("auto");
                    }
                };
            }

            // set img
            setImg(src); // need to check this according to return from db after mongo set up
        });
    });

    return (
        <ViewPageWrapper>
            <div className="row">
                <ImgWrapper>
                    <Img
                        src={img}
                        alt="A Motivational Poster from a Friend"
                        ref={imgRef}
                        width={width}
                        height={height}
                    />
                </ImgWrapper>
                <ButtonWrapper>
                    <CreateLinkButton />
                </ButtonWrapper>
            </div>
        </ViewPageWrapper>
    );
};

export default CardGet;
