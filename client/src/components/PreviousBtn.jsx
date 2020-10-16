import React from "react";
import styled from "styled-components";


const Prvbtn = styled.button.attrs({
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
        <Prvbtn>Previous &raquo;</Prvbtn>
    </div>  
    );
};

export default PrvBtn;