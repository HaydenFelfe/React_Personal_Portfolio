import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
import waveGif from "../assets/img/wave.webp"


export const Banner = () => {
const [loopNum, setLoopNum] = useState(0);
const [isDeleteting, setIsDeleting] = useState(false);
const toRotate = [ " Web Developer", " Web Designer", " UI/UX Designer" ];
const [text, setText] = useState('');
const [delta, setDelta] = useState(300 - Math.random() * 100);
const period = 1000;

useEffect(() => {
    const ticker = setInterval(() => {
        tick();
    }, delta)

    return () => { clearInterval(ticker)}
}, [text])

const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i]
    let updatedText = isDeleteting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleteting){
        setDelta(prevDelta => prevDelta/2)
    }

    if(!isDeleteting && updatedText === fullText){
        setIsDeleting(true);
        setDelta(period);
    } else if (isDeleteting && updatedText === ''){
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
    }
}

return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} style={{width: "75%" }}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{'I am a '}<span className="wrap">{text}</span></h1>
            <p> My name is Hayden Felfe, a web enthusiast that recently completed a rigorous JavaScript bootcamp. With a solid foundation in JavaScript and a passion for design, I'm all about crafting captivating user experiences. I'm eager to showcase my skills in web development and design, from coding interactive interfaces to implementing robust backend features. Collaboration and continuous learning drive me, as I seek to create seamless, user-centered websites. Let's connect and explore the dynamic world of web development together.</p>
            <a href="#connect" className="custom-link">
            <button onClick={() => console.log('connect')}>
              Let's Connect <ArrowRightCircle size={25}/>
            </button>
            </a>
          </Col>
          <Col xs={12} md={6} xl={5} style={{width: "25%" }}>
          <div style={{ width: "90%", margin: "0 auto" }}>
              <img src={waveGif} alt="Header Img" className="wave" width="100%" height="auto" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};