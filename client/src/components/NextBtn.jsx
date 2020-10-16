import React from "react";
import styled from "styled-components";


const Nxtbtn = styled.button.attrs({
    className: "btn",
})`
  text-decoration: none;
  display: inline-block;
  padding: 8px 30px;
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