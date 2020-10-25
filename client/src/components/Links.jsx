import React, { useRef } from "react";
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
    const collapseRef = useRef(null);
    const hideNav = () => {
        collapseRef.current.classList.remove("show");
    };

    return (
        <Collapse ref={collapseRef}>
            <List>
                <Item>
                    <LinkWrapper>
                        <Link to="/" className="red-text" onClick={hideNav}>
                            Home
                        </Link>
                    </LinkWrapper>
                </Item>
                <Item>
                    <LinkWrapper>
                        <Link
                            to="/create"
                            className="red-text"
                            onClick={hideNav}
                        >
                            Create
                        </Link>
                    </LinkWrapper>
                </Item>
            </List>
        </Collapse>
    );
};

export default Links;
