import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import houseImage from '../assets/house.jpeg';
import cottageImage from '../assets/cottage.jpeg';
import cabinImage from '../assets/cabin.jpeg';



export const Jumbotron = () => (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={houseImage}
      alt="First slide"
      witdth="800"
      height="500"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ cottageImage }
      alt="Third slide"
      witdth="800"
      height="500"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ cabinImage } 
      alt="Third slide"
      witdth="800"
      height="500"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)