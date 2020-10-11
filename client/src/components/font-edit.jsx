import React from "react";
import styled from "styled-components";

const Button = styled.div.attrs({
    className: "btn btn-warning ",
})`
width:100px;
`;

const dropdown = styled.div.attrs({
    className: "btn btn-secondary dropdown-toggle",
})`
`;

const wrapper = styled.div.attrs({
	className:"input-group-append"
})`	
`;

const FontEdit = () =>{
 return(
 	<wrapper>
 		Size
 		<Button className="ml-5">+</Button>
 		<Button>-</Button>
 		<br /><br />
 		Font Weight	
 		<Button>+</Button>
 		<Button>-</Button>
 		<br /><br />	
 		Font color <input type="color"/>
 		<br /><br />
 		Background color <input type="color"/>
 		<br /><br />
 		Background Opacity	
 		<Button>+</Button>
 		<Button>-</Button>
 	</wrapper>
 	)
}

export default FontEdit;