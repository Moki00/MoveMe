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

const LinkWrapper = styled.div.attrs({
    className: "nav-link",
})`
    letter-spacing: 3px;
`;

const Links = () => {
    return (
        <Collapse>
            <List>
                <Item>
                    <LinkWrapper>
                        <Link to="/" className="text-danger">
                            Home
                        </Link>
                    </LinkWrapper>
                </Item>
                <Item>
                    <LinkWrapper>
                        <Link to="/create" className="text-danger">
                            Create
                        </Link>
                    </LinkWrapper>
                </Item>
            </List>
        </Collapse>
    );
};

export default Links;
