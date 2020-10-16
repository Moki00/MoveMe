import React from "react";
import styled from "styled-components";


const prvbtn = styled.i.attrs({
    className: "btn",
})`
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  background-color: #fff55a;
  color: black;
`;

const PrvBtn = () => {
    return (
    <div>
        <prvbtn>Previous &raquo;</prvbtn>
    </div>  
    );
};

export default PrvBtn;