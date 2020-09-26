import React, { Component } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Links from "./Links";

const BurgerBtn = styled.button.attrs({
    className: "navbar-toggler",
    type: "button",
})``;

const BurgerIcon = styled.span.attrs({
    className: "navbar-toggler-icon",
})``;

const Nav = styled.nav.attrs({
    className:
        "navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between",
})``;

const NavBar = () => {
    return (
        <Nav>
            <Logo />
            <BurgerBtn
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle Navigation"
            >
                <BurgerIcon />
            </BurgerBtn>
            <Links />
        </Nav>
    );
};

export default NavBar;
