import React, { useRef } from "react";
import styled from "styled-components";
import Autocomplete from "react-autocomplete";
import json from "../data/test.json";

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

// https://www.roytuts.com/autocomplete-input-using-react/#:~:text=%20Autocomplete%20input%20using%20React%20%201%20Introduction.,Source%20Code.%20Thanks%20for%20reading.%20%20More%20
// https://www.digitalocean.com/community/tutorials/react-react-autocomplete
// https://www.npmjs.com/package/react-autocomplete

const SearchBar = () => {
    const searchBoxRef = useRef(null);
    console.log(json);
    return (
        <form className="form-inline">
            <Autocomplete
                getItemValue={(item) => item.label}
                items={[
                    { label: "apple" },
                    { label: "banana" },
                    { label: "pear" },
                ]}
                renderItem={(item, isHighlighted) => (
                    <div
                        style={{
                            background: isHighlighted ? "lightgray" : "white",
                        }}
                    >
                        {item.label}
                    </div>
                )}
                value={value}
                onChange={(e) => (value = e.target.value)}
                onSelect={(val) => (value = val)}
            />
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
