import BatterSpecs1 from '../images/battery-specs1.jpg';
import BatterSpecs2 from '../images/battery-specs2.jpg';
import BatterSpecs3 from '../images/battery-specs3.jpg';

function SolarBatteries() {
  return (
    <article>
      <h1>Solar Batteries</h1>
      <img alt='ReneSola Batter Specs' className='imageFrame fullWidth' src={BatterSpecs1} />
      <img alt='ReneSola Batter Specs' className='imageFrame fullWidth' src={BatterSpecs2} />
      <img alt='ReneSola Batter Specs' className='imageFrame fullWidth' src={BatterSpecs3} />

    </article>
  );
}

export default SolarBatteries;
