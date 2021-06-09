import React from 'react'
import {Container,Carousel} from 'react-bootstrap'

const Crousel = () => {
    return (
      <>
        <div className="p-3" style={{backgroundColor:"black"}}>
          <Carousel >
            <Carousel.Item>
              <img
                style={{ height: "50vh" }}
                className="d-block w-100"
                src="https://cdn.trendhunterstatic.com/thumbs/effective-hand-sanitizer.jpeg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>GO SANITIZE </h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "50vh" }}
                className="d-block w-100"
                src="https://tse2.mm.bing.net/th?id=OIP._Io6SCd1LJo5MHHTfBFtVQHaFj&pid=Api&P=0&w=205&h=155"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>AYURVEDIC</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: "50vh" }}
                className="d-block w-100"
                src="https://tse1.mm.bing.net/th?id=OIP.cQCd6R8zPt7sEb0qvLmMqwHaEo&pid=Api&P=0&w=285&h=179"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>ANTI-BIOTICS</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
}

export default Crousel
