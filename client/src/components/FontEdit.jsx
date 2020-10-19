import React from "react";
import styled from "styled-components";



const Button = styled.div.attrs({
    className: "btn btn-warning ",
})`
width:100px;
`;

const wrapper = styled.div.attrs({
	className:"input-group-append"
})`	
`;

const Container = styled.div.attrs({
	className:"container"
})`
line-height:40px;	
width:39%;
border:1px solid black; 
`;

const Row = styled.div.attrs({
	className:"row "
})`	

`;

const Col = styled.div.attrs({
	className:"col"
})`
width:100%;
	`;


const FontEdit = () =>{
 return(
 	<Container style={{background:"#cecece"}}>
  <Row>
    <Col>Size</Col>
    <Col><Button style={{color:"red"}}>-</Button></Col>
    <Col><Button style={{color:"red"}}>+</Button></Col>
  </Row>
  <Row>
    <Col>Font Weight</Col>
    <Col><Button style={{color:"red"}}>-</Button></Col>
    <Col><Button style={{color:"red"}}>+</Button></Col>
  </Row>
    <Row>
    <Col>Font color </Col>
    <Col><input type="color" style={{width:"65%",height:"25px"}} value="#00ffff"/></Col>
    <Col></Col>
  </Row>
    <Row>
  <Col>Font</Col>
  <Col>
  <select name="cars" id="cars" style={{background: "#ffc107",width:"65%",color:"red"}}>
  <option></option>
  <option value="" >Arial</option>
  <option value="">Times New Roman</option>
  <option value="">Times</option>
  <option value="">Courier New</option>
</select>
</Col>
  <Col></Col>
</Row>
    <Row>
    <Col>Background color</Col>
    <Col><input type="color" style={{width:"65%",height:"25px"}} value="#00ffff"/></Col>
    <Col></Col>
  </Row>

      <Row>
    <Col>Background Opacity</Col>
    <Col><Button style={{color:"red"}}>-</Button></Col>
    <Col><Button style={{color:"red"}} >+</Button></Col>
  </Row>
<Row style={{"margin-top":"20px"}}>
 <Col><Button style={{background:"red",border:"red"}}>Close</Button></Col>
<Col><Button style={{background:"red",border:"red"}}>Save</Button></Col>
<Col></Col>
</Row>
</Container>
 	)
}

export default FontEdit;