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

const Container = styled.div.attrs({
	className:"container"
})`
line-height:40px;	
`;

const Row = styled.div.attrs({
	className:"row "
})`	`;

const Col = styled.div.attrs({
	className:"col-lg-2	"
})`	`;

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
</Container>
 	)
}

export default FontEdit;