import React from "react";
import styled from "styled-components";
import logo from "../logo.png";

const Wrapper = styled.a.attrs({
    className: "navbar-brand",
})``;

const Logo = () => {
    return (
        <Wrapper href="#">
            <img src={logo} height="50" alt="" />
        </Wrapper>
    );
};

export default Logo;
