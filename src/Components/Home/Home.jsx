import React from 'react'
import carousal1 from "../../Assets/crousal-main.jpg"
import carousal2 from "../../Assets/crousal-main2.jpg";
import Carousel from 'react-bootstrap/Carousel';
import Academics from '../Academics/Academics';
import Campus from '../Campus/Campus';




const Home = () => {
  return (
    <div>

      <Carousel>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={carousal1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={carousal2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
    <Academics/>
    <Campus/>
    </div>
  )
}

export default Home