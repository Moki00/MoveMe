import React from "react";
import styled from "styled-components";

const Button = styled.button.attrs({
    type: "button",
    className: "btn btn-warning d-lg-none",
})
`
position: absolute;
top: 30%;
left:92%;
border-radius:10px;
`;

const Editbtn = () =>{
	return(
		<div>
			<Button>E<br/>d<br/>i<br/>t</Button>
		</div>
	);
}

export default Editbtn;