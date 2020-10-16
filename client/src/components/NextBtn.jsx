import React from "react";
import styled from "styled-components";


const Nxtbtn = styled.i.attrs({
    className: "btn",
})`
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  background-color: #fff55a;
  color: black;
`;

const NxtBtn = () => {
    return (
    <div>
        <Nxtbtn>Next &raquo;</Nxtbtn>
    </div>  
    );
};

export default NxtBtn;