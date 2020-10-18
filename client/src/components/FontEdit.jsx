import React from "react";
import styled from "styled-components";
import {Dropdown} from "react-bootstrap";


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
`;

const Row = styled.div.attrs({
	className:"row "
})`	`;

const Col = styled.div.attrs({
	className:"col-sm-2"
})`
	`;


const FontEdit = () =>{
 return(
 	<Container>
  <Row>
    <Col>Size</Col>
    <Col><Button >-</Button></Col>
    <Col><Button >+</Button></Col>
  </Row>
  <Row>
    <Col>Font Weight</Col>
    <Col><Button >-</Button></Col>
    <Col><Button >+</Button></Col>
  </Row>
      <Row>
    <Col>Background Opacity</Col>
    <Col><Button >-</Button></Col>
    <Col><Button >+</Button></Col>
  </Row>
  <Row>
    <Col>Font color </Col>
    <Col><input type="color" style={{width:"60%",height:"25px"}} value="#00ffff"/></Col>
    <Col></Col>
  </Row>
    <Row>
    <Col>Background color</Col>
    <Col><input type="color" style={{width:"60%",height:"25px"}} value="#00ffff"/></Col>
    <Col></Col>
  </Row>

  <Row>
  <Col>Font</Col>
  <Col>
  <select name="cars" id="cars" style={{background: "#ffc107",width:"60%"}}>
  <option value="">Arial</option>
  <option value="">Arial</option>
  <option value="">Arial</option>
  <option value="">Arial</option>
</select>
</Col>
  <Col></Col>
</Row>
<Row style={{"margin-top":"20px"}}>
 <Col></Col>
<Col><Button>Close</Button></Col>
<Col><Button>Save</Button></Col>
</Row>
</Container>
 	)
}

export default FontEdit;