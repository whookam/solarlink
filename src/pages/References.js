import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RefImg1 from '../images/refimg1.jpg';
import RefImg2 from '../images/refimg2.jpg';
import RefImg3 from '../images/refimg3.jpg';
import RefImg4 from '../images/refimg4.jpg';
import RefImg5 from '../images/refimg5.jpg';
import RefImg6 from '../images/refimg6.jpg';
import RefImg7 from '../images/refimg7.jpg';

function References() {
  return (
    <article>
      <Container>
        <Row>
          <h1>References</h1>
        </Row>
        <Row>
          <Col sm={12} md={4}>
            <img alt="reference" className='imageFrame' src={RefImg1}/>
          </Col>
          <Col sm={12} md={8}>
            <h2>4.5 Kw hybrid grid tie with battery backup at Vogelstrand 2015</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={4}>
            <img alt="reference" src={RefImg2}/>
          </Col>
          <Col sm={12} md={8}>
            <h2>2000l Complete Solar – Hotwater – System at Swakopmund Boutique Hotel, 2009</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={5}>
            <img alt="reference" className='imageFrame' src={RefImg3}/>
            <img alt="reference" className='imageFrame' src={RefImg4}/>
            <img alt="reference" className='imageFrame' src={RefImg5}/>
          </Col>
          <Col sm={12} md={7}>
            <h2>5Kw off grid system Swakop river plots 2014</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={5}>
            <img alt="reference" className='imageFrame' src={RefImg6}/>
            <img alt="reference" className='imageFrame' src={RefImg7}/>
          </Col>
          <Col sm={12} md={7}>
            <h2>5.5Kw offgrid system Omaruru rural 2015</h2>
          </Col>
        </Row>
        
      </Container>
    </article>
  );
}

export default References;
