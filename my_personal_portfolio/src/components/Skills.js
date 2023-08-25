import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p2>
              Equipped with a strong command of HTML, CSS, and JavaScript, I specialize in creating captivating user interfaces that
               seamlessly blend aesthetics and functionality. My expertise extends to back-end technologies like Node.js and Express, 
               nabling me to develop efficient server-side applications. With a keen eye for UI/UX design, I'm determined to crafting
                visually appealing and user-centered web solutions.{" "}
              </p2>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                removeArrowOnDeviceType={["tablet", "mobile", "computer"]} 
                showDots={false}
                
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5> Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5> Express.js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5> Node.js</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5> Database Management</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-left" src={colorSharp} /> */}
    </section>
  );
};
