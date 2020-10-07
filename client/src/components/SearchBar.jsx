import React, { useRef } from "react";
import styled from "styled-components";

const SearchIconButton = styled.div.attrs({
    className: "input-group-append",
    id: "searchButton",
    // change later
})`
    cursor: pointer;
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
                    useRef={searchBoxRef}
                />
                <SearchIconButton>
                    <span
                        className="input-group-text bg-warning"
                        id="SearchIcon"
                    >
                        <i className="fa fa-search"></i>
                    </span>
                </SearchIconButton>
            </div>
        </form>
    );
};

export default SearchBar;
