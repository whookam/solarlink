import PeplusPage1 from '../images/Replus-SineON.jpg';
import PeplusPage2 from '../images/Replus-SineON2.jpg';
import Sunniva from '../images/Sunniva1.jpg';
import RCT from '../images/RCT.jpg';

function SolarInverter() {
  return (
    <article>
      <h1>Off Grid Inverter/Charger</h1>
      <h2>REPLUS SINEON OFF/GRID inverter charger with integrated PWM Solar charger</h2>

      <img className='imageFrame fullWidth' alt="Replus by ReneSola" src={PeplusPage1} />
      <img className='imageFrame fullWidth' alt="Replus by ReneSola" src={PeplusPage2} />
      
      <h2>SUNNIVA OFF/GRID inverter charger with integrated PWM solar charger</h2>
      <p>Available in 5KVA/48V only</p>
      <img className='imageFrame fullWidth' alt="Sunniva" src={Sunniva} />

      <h2>RCT AXPERT OFF GRID INVERTER/CHARGER WITH INTEGRATED MPPT SOLAR CHARGER</h2>
      <img className='imageFrame fullWidth' alt="RCT AXpert" src={RCT} />
    </article>
  );
}

export default SolarInverter;
