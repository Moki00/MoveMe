import React from "react";
import styled from "styled-components";

const QuoteNavWrapper = styled.div.attrs({
    className: "quoteNavArea d-flex flex-column align-item-center text-center",
})`
    width: 45%;
`;

const QuoteNavButtonWrapper = styled.div.attrs({
    className:
        "QuoteNavButtonWrapper d-flex justify-content-around align-items-center",
})``;

const Button = styled.button.attrs({
    className: "btn btn-warning text-danger",
})``;

const QuoteNavArea = () => {
    return (
        <QuoteNavWrapper>
            <h2>Quote</h2>
            <QuoteNavButtonWrapper>
                <Button>prev.</Button>
                <Button>next</Button>
            </QuoteNavButtonWrapper>
        </QuoteNavWrapper>
    );
};

export default QuoteNavArea;
