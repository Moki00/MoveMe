import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.png";

const Wrapper = styled.div.attrs({
    className: "navbar-brand",
})``;

const Logo = () => {
    return (
        <Wrapper href="/">
            <Link to="/">
                <img src={logo} height="50" alt="" />
            </Link>
        </Wrapper>
    );
};

export default Logo;
