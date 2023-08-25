import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/theworkoutforum.png";
import projImg2 from "../assets/img/workoutForumscreenshot.png";
import projImg3 from "../assets/img/helpinghomeless.png";

export const Projects = () => {
  const projects = [
    {
      title: "The Workout Forum",
      description: "Design & Development",
      imgUrl: projImg1,
      websiteURL: "https://secret-headland-44009-a7fef38932b2.herokuapp.com/"
    },
    {
      title: "The Workout Forum",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Helping Homeless",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
            Explore a glimpse of my diverse project portfolio that showcases my versatility across both front-end and back-end development. These creations reflect my commitment to delivering well-rounded solutions, built entirely from the ground up.{" "}
            </p>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5">
                <Nav.Item>
                  <Nav.Link eventKey="first">Workout Forum</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Helping Homeless</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">My next Project</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row className="row">
                    {projects.map((project, index) => {
                      if (project.imgUrl === projImg2) {
                        return <ProjectCard key={index} {...project} />;
                      }
                      return null;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row className="row">
                    {projects.map((project, index) => {
                      if (project.imgUrl === projImg3) {
                        return <ProjectCard key={index} {...project} />;
                      }
                      return null;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">Hayden Felfe</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
