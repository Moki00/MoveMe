import React, { useState } from "react";
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
    height: 50vh;
`;

const ImgWrapper = styled.div.attrs({
    className: "col-12 d-flex justify-content-center",
})``;

const ButtonWrapper = styled.div.attrs({
    className: "col-12 d-flex justify-content-center mt-5",
})``;

const CardGet = ({ match }) => {
    const [img, setImg] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    React.componentDidMount = async () => {
        setIsLoading(true);

        await api.getCard(match.params.id).then((card) => {
            setImg(card.data.data); // need to check this according to return from db after mongo set up
        });
    };

    return (
        <ViewPageWrapper>
            <div className="row">
                <ImgWrapper>
                    <Img src={img} alt="A Motivational Poster from a Friend" />
                </ImgWrapper>
                {/* Need to have an img in centre with create button below. Img should have max width */}
                <ButtonWrapper>
                    <CreateLinkButton />
                </ButtonWrapper>
            </div>
        </ViewPageWrapper>
    );
};

export default CardGet;
