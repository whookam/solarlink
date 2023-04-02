import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeatPipeImage from '../images/heatpipe01.jpg';
import HeatPipeImage2 from '../images/heatpipe02.jpg';


function HowHeatPipesWorks() {
  return (
    <article>
      <Container>
        <Row>
          <Col>
            <h1>How Heat Pipes Works</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={8}>
            <h2>How the Evacuated Tube Works</h2>
            <p>Evacuated tubes are the absorber of the solar water heater.They absorb solar energy converting it heatpipe01into heat for use in water heating. Each evacuated tube consists of a double wall glass tube made from extremely strong borosilicate glass. The outer tube is transparent allowing light rays to pass through with minimal reflection. The inner tube is coated with a special selective coating (Al-N/Al) which features excellent solar radiation absorption and minimal reflection properties. The top of the two tubes are fused together and the air contained in the space between the two layers of glass is pumped out while exposing the tube to high temperatures.. This “evacuation” of the gasses forms a vacuum, which minimizes heat loss to about 3 to 7%.</p>
          </Col> 
          <Col sm={12} md={4}>
            <img alt="Heat pipes" src={HeatPipeImage} />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={8}>
            <h2>The Heat Pipe</h2>
            <p>The evacuated tube collectors are an entirely different approach to solar water heating.  Instead of many water filled copper pipes, these collectors use multiple vacuum filled glass tubes, each with a tiny amount of antifreeze hermetically sealed within a small central copper pipe.  When heated by the sun, this antifreeze converts to steam, rises to the top of the tube, transfers its heat to a collector header, then condenses back into liquid and repeats the process. heatpipe02Because heat does not easily transfer through a vacuum, 92% of the thermal energy hitting the absorber plate stays within the evacuated tube and passes to the collector header. This is a huge advantage because a standard flat plate collector radiates much of its accumulated heat to the surrounding atmosphere.   The evacuated tubes are also completely modular. Although rarely necessary, one or more tubes can be removed and replaced without affecting the other tubes in the array. There is no actual liquid transferred from the evacuated tube to the collector header…just heat. Evacuated tubes also start absorbing heat earlier in the day than flat plates due to their convex design and the tiny amount of antifreeze within the tube is freeze protected down to-40 C.</p>
          </Col>
          <Col sm={12} md={4}>
            <img alt="Heat pipes" src={HeatPipeImage2} />
          </Col>
        </Row>
      </Container>
    </article>
  );
}

export default HowHeatPipesWorks;
