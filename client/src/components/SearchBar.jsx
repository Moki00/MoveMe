import React from "react";
import styled from "styled-components";

const Button = styled.button.attrs({
    type: "button",
    className: "btn btn-warning",
})``;

const SearchBar = () => {
    return (
        <form className="form-inline">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
                <div className="input-group-append">
                    <span
                        className="input-group-text bg-warning"
                        id="basic-addon1"
                    >
                        <Button data-toggle="modal" data-target="#shareModal">
                            <i className="fa fa-search"></i>
                        </Button>
                    </span>
                </div>
            </div>
        </form>
    );
};

export default SearchBar;
