import React from "react";
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
                    <Link to="/" className="nav-link text-danger">
                        Home
                    </Link>
                </Item>
                <Item>
                    <Link to="/create" className="nav-link text-danger">
                        Create
                    </Link>
                </Item>
            </List>
        </Collapse>
    );
};

export default Links;
