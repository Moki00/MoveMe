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
    <Col><Button >+</Button></Col>
    <Col><Button >-</Button></Col>
  </Row>
  <Row>
    <Col>Font Weight</Col>
    <Col><Button >+</Button></Col>
    <Col><Button >-</Button></Col>
  </Row>
  <Row>
    <Col>Font color </Col>
    <Col></Col>
    <Col><input type="color"/></Col>
  </Row>
    <Row>
    <Col>Background color</Col>
    <Col></Col>
    <Col><input type="color"/></Col>
  </Row>
    <Row>
    <Col>Background Opacity</Col>
    <Col><Button >+</Button></Col>
    <Col><Button >-</Button></Col>
  </Row>
  <Row>
  <Col>Font</Col>
  <Col></Col>
  <Col>
  <Dropdown>
  <Dropdown.Toggle variant="warning" id="dropdown-basic">
    Dropdown
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</Col>
</Row>
</Container>
 	)
}

export default FontEdit;