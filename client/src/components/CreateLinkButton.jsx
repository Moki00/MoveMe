import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button.attrs({
    type: "button",
    className: "btn btn-warning text-danger",
})``;

const CreateLinkButton = () => {
    return (
        <Link to="/create">
            <Button>Create</Button>
        </Link>
    );
};

export default CreateLinkButton;
