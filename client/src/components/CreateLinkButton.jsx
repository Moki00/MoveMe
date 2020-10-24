import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button.attrs({
    type: "button",
    className: "btn btn-warning red-text",
})`
    font-size: 1.3rem !important;
    font-weight: 500;
    width: 150px;
    border-radius: 10px !important;
`;

const CreateLinkButton = () => {
    return (
        <Link to="/create">
            <Button>Create</Button>
        </Link>
    );
};

export default CreateLinkButton;
