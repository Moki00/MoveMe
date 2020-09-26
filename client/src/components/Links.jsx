import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Collapse = styled.div.attrs({
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent",
})``;

const List = styled.ul.attrs({
    className:
        "navbar-nav w-25 d-flex justify-content-around ml-auto align-items-end",
})``;

const Item = styled.li.attrs({
    className: "nav-item",
})``;

const Links = () => {
    return (
        <Collapse>
            <List>
                <Item>
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </Item>
                <Item>
                    <Link to="/create" className="nav-link">
                        Create
                    </Link>
                </Item>
            </List>
        </Collapse>
    );
};

export default Links;

// <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav">

//     </ul>
// </div>;
