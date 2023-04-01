import enersolBanner from '../images/enersol-banner.png';
import aquasolBanner from '../images/aquasol-banner.png';
import canadianSolarBanner from '../images/canadianSolar-banner.png';
import ReneSolaBanner from '../images/ReneSola-banner.png';

function SolarPVPanels() {
  return (
    <article>
      <h1>Solar PV Panels</h1>
      <h2>We supply the following Solar PV Panels</h2>

      <img className='imageFrame fullWidth' alt="EnerSol" src={enersolBanner} />
      <img className='imageFrame fullWidth' alt="AquaSol" src={aquasolBanner} />
      <img className='imageFrame' alt="ReneSolar" src={ReneSolaBanner} />
      <h3>ReneSola Solar Panels</h3>
      <p>ReneSola is known for their Virtus and monocrystalline solar panels. The ReneSola Virtus II solar panel is a combination of the high quality and efficiency of monocrystalline modules, with the lower cost of polycrystalline modules. Vitus solar panels are up to 4% more efficient than standard polycrystalline. For greater efficiency, a smaller footprint per watt and a sleek dark look.</p>
      <img className='imageFrame' alt="Canadian Solar" src={canadianSolarBanner} />
      <p>Canadian Solar Inc deliver industry leading high efficiency solar cells, solar modules, solar power systems and off grid solar power application solutions. It’s PV panels have been so thoroughly tested and proven under harsh conditions that Canadian Solar offer a 25-year warranty with confidence. Canadian Solar customers can have peace of mind knowing they are dealing with a highly ranked, bankable and reliable company.</p>
    </article>
  );
}

export default SolarPVPanels;
