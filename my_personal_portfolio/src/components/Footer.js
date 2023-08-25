import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
export const Footer = () => {
return(
    <footer className="footer">
        <Container>
            <Row className="align-item-center">
            <Col sm={6} className="logo-col">
                <img src={logo} alt="logo"/>
            </Col>
            <Col sm={6} className="text-center text-sm-end">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/hayden-felfe-2a895a193/"><img src={navIcon1} /></a>
                    <a href="https://github.com/haydenfelfe"><img src={navIcon2} alt="" /></a>
                    <a href="https://www.instagram.com/hayden_felfe/?hl=en"><img src={navIcon3} /></a>
                </div>
                <p> CopRight 2023. All Rights Reserved by Hayden</p>
            </Col>
            </Row>  
        </Container>
    </footer>
)
}
