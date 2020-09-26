import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.a.attrs({
    className: "navbar-brand",
})``;

const Footer = () => {
    return (
    <footer class="footer bg-warning">
      <div class="container d-flex justify-content-around">
        <span class="text-muted">&copy; {new Date().getFullYear()} Copyright | <a class='text-danger' href="https://github.com/moki929/MoveMe">Morgan & Morgan </a></span>
      </div>
    </footer>
    );
};

export default Footer;