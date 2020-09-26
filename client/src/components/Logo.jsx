import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.png";

const Wrapper = styled.a.attrs({
    className: "navbar-brand",
})``;

const Logo = () => {
    return (
        <Link to="/">
            <Wrapper href="/">
                <img src={logo} height="50" alt="" />
            </Wrapper>
        </Link>
    );
};

export default Logo;
