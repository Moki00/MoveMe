import React from "react";
import styled from "styled-components";
import { CreateLinkButton, CarouselArea } from "../components";

const HomePageWrapper = styled.div.attrs({
    className:
        "container d-flex flex-column justify-content-center align-items-start",
})`
    height: 80vh;
    font-size: 1rem !important;
`;

const Banner = styled.h1.attrs({})`
    font-size: 4em !important;
`;

const Home = () => {
    return (
        <HomePageWrapper>
            <div className="row">
                <div className="col-12" id="textWrapper">
                    <Banner>
                        Create amazing e-cards that really{" "}
                        <span className="text-danger">Move</span> people.
                    </Banner>
                </div>
                <div className="col-12 mt-5">
                    <CreateLinkButton width="100px" />
                </div>
            </div>
            <CarouselArea />
        </HomePageWrapper>
    );
};

export default Home;
