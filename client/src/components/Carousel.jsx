import React from "react";
import {Carousel} from "react-bootstrap";
import quote1 from "../quote1.jpg";
import quote2 from "../quote2.jpg";
import quote3 from "../quote3.jpeg";

const Carousel1 = () =>{
	return(
<div>
	<Carousel interval="3000">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={quote1}
      alt="First slide"
      height="500px"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={quote2}
      alt="Third slide"
      height="500px"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={quote3}
      alt="Third slide"
      height="500px"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
);
};

export default Carousel1;