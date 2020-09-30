import React from "react";
import styled from "styled-components";


const a = styled.button.attrs({
    
})`

 padding: 20px;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  `;

const SocialIcons = () =>{
	return(
		<a href="#" className="fa fa-instagram"></a>
		);
};

export default SocialIcons;