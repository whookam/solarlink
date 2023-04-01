import MCSpecSheet from '../images/MC-SpecSheet.jpg';
import ReneSpecSheet1 from '../images/Replus-specs1.jpg';
import ReneSpecSheet2 from '../images/Replus-specs2.jpg';
import ReneSpecSheet3 from '../images/Replus-specs3.jpg';
import ReneSpecSheet4 from '../images/Replus-specs4.jpg';

function SolarChargeControllers() {
  return (
    <article>
      <h1>Solar PV charge controllers</h1>
      <p>SOLAR CHARGE CONTROLLERS  ARE THE ESSENTIAL COMPONENT BETWEEN SOLAR PANELS AND  BATTERIES  IN OFFGRID SYSTEMS.THE CONTROLLER WILL ENABLE THE MAXIMUM CHARGE TO REACH THE BATTERIES AND  WHEN FULL, WILL FLOAT CHARGE THEM SO THEY REMAIN FULL. IN ADDITION THE CONTROLLER WILL ENSURE THE BATTERIES ARE NOT OVERCHARGED</p>
      
      <h2>RENESOLA REPLUS CHARGE CONTROLLERS</h2>
      <img alt='Replus DirectON Spec Sheet' className='imageFrame fullWidth' src={ReneSpecSheet1} />
      <img alt='Replus DirectON Spec Sheet' className='imageFrame fullWidth' src={ReneSpecSheet2} />
      <img alt='Replus DirectON Spec Sheet' className='imageFrame fullWidth' src={ReneSpecSheet3} />
      <img alt='Replus DirectON Spec Sheet' className='imageFrame fullWidth' src={ReneSpecSheet4} />


      <h2>MICROCARE CHARGE CONTROLLERS</h2>
      <img alt='Microcare Solar Regulator Spec Sheet' className='imageFrame fullWidth' src={MCSpecSheet} />
    </article>
  );
}

export default SolarChargeControllers;
