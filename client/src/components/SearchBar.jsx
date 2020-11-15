import React, { useRef } from "react";
import styled from "styled-components";

const SearchIconButton = styled.div.attrs({
    className: "input-group-text yellow-background",
    id: "SearchIcon",
})``;

const Wrapper = styled.div.attrs({
    className: "input-group-append",
    id: "searchButton",
})`
    cursor: pointer;
    &:hover ${SearchIconButton} {
        transform: scale(1.1);
    }
`;

const SearchBar = () => {
    const searchBoxRef = useRef(null);
    return (
        <form className="form-inline">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Nature"
                    aria-label="SearchBox"
                    aria-describedby="SearchIcon"
                    ref={searchBoxRef}
                />
                <Wrapper>
                    <SearchIconButton>
                        <span>
                            <i className="fa fa-search"></i>
                        </span>
                    </SearchIconButton>
                </Wrapper>
            </div>
        </form>
    );
};

export default SearchBar;
