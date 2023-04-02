import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectsImage from '../images/projects.jpg';

function Projects() {
  return (
    <article>
      <Container>
        <Row>
          <h1>Projects</h1>
          <h2>Large Projects Hot Water</h2>
        </Row>
        <Row>
          <Col sm={12} md={8}>
            <p>We offer a complete one stop service for commercial hot water systems including design, supply and installation for hospitals, hotels, laundries and lodges. We can retrofit solar heating systems in existing electric and diesel hot water systems We also offer hybrid systems utilizing primarily solar , with heat pumps as backup heating., We can heat water for ablutions as well as for space heating using a single heating source ( solar with heatpump backup) Adding solar heating to an existing diesel fired boiler will result in large savings on diesel and a quick payback.</p>
          </Col>
          <Col sm={12} md={4}>
            <img alt="large projects hot water" src={ProjectsImage} />
          </Col>
        </Row>
      </Container>
    </article>
  );
}

export default Projects;
